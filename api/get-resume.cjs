// api/get-resume.js  (CommonJS for Vercel functions)
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Set your file name here once
const storedFileName = 'Junior-Cyber-Analyst-Resume-VNelai-8-25.pdf'; // Supabase object name
const downloadFileName = 'Virginia-Nelai-Resume.pdf'; // Pretty name shown to recruiters

module.exports = async (req, res) => {
  try {
    // 1️⃣ Log the download
    await supabase.from('resume_downloads').insert({
      ip: (req.headers['x-forwarded-for'] || '').split(',')[0] || req.socket?.remoteAddress || null,
      user_agent: req.headers['user-agent'] || null,
      referer: req.headers['referer'] || null,
    });

    // 2️⃣ Fetch from Supabase bucket
    const { data, error } = await supabase
      .storage
      .from('resume') // bucket name
      .download(storedFileName);

    if (error) throw error;

    // 3️⃣ Send the file with a clean name
    const buf = Buffer.from(await data.arrayBuffer());
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${downloadFileName}"`);
    res.status(200).send(buf);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to download resume' });
  }
};
