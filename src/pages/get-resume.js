import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    // 1️⃣ Log the download
    await supabase.from('resume_downloads').insert({
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null,
      user_agent: req.headers['user-agent'] || null,
      referer: req.headers['referer'] || null
    });

    // 2️⃣ Fetch the PDF from your private bucket
    const { data, error } = await supabase
      .storage
      .from('resume') // bucket name
      .download('Virginia-Nelai-Resume.pdf'); // replace with your exact file name

    if (error) throw error;

    // 3️⃣ Send the file to the browser
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Virginia-Nelai-Resume.pdf"');
    res.send(Buffer.from(await data.arrayBuffer()));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to download resume' });
  }
}
