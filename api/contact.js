import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name = "", email = "", subject = "", message = "", website = "" } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  // 🔐 Fail fast if service key isn’t loaded (common Preview env issue)
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Missing SUPABASE_SERVICE_ROLE_KEY in this environment");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  try {
    // 1) Store (match table columns exactly)
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, subject, message, website }])
      .select("id");

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    // 2) Email (Resend)
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <notifications@resend.dev>",
        to: [process.env.TO_EMAIL],
        subject: `New contact: ${subject || "(no subject)"}`,
        html: `
          <h3>New message from your site</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });
    if (!r.ok) console.error("Resend error", await r.text());

    return res.status(200).json({ ok: true, id: data?.[0]?.id ?? null });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
}
