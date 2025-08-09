import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const storedFileName = "Junior-Cyber-Analyst-Resume-VNelai-8-25.pdf";
const downloadFileName = "Virginia-Nelai-Resume.pdf";

export default async function handler(req, res) {
  try {
    await supabase.from("resume_downloads").insert({
      ip:
        (req.headers["x-forwarded-for"] || "").split(",")[0] ||
        req.socket?.remoteAddress ||
        null,
      user_agent: req.headers["user-agent"] || null,
      referer: req.headers["referer"] || null,
    });

    const { data, error } = await supabase.storage
      .from("resume")
      .download(storedFileName);
    if (error) throw error;

    const buf = Buffer.from(await data.arrayBuffer());
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${downloadFileName}"`
    );
    res.status(200).send(buf);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to download resume" });
  }
}
