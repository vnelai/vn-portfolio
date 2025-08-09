// api/get-resume.js  (Vercel serverless function, CommonJS to avoid ESM issues)
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  try {
    // 1) log
    await supabase.from('resume_downloads').insert({
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
      user_agent: req.headers['user-agent'] || null,
      referer: req.headers['referer'] || null,
    });

    // 2) fetch from private bucket (update filename)
    const { data, error } = await supabase
      .storage
      .from('resume')
      .download('Virginia-Nelai-Resume.pdf');

    if (error) throw error;

    // 3) stream to client
    const buf = Buffer.from(await data.arrayBuffer());
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Virginia-Nelai-Resume.pdf"');
    res.status(200).send(buf);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to download resume' });
  }
};