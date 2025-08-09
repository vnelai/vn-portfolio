import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name = "", email = "", subject = "", message = "" } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  // 1) store
  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    subject,
    message,
    website: req.body.website || null
  });
  if (error) {
    console.error("Supabase insert error:", error);
  }
  // 2) email (Resend)
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

  return res.status(200).json({ ok: true });
}
