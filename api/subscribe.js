export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email = '', website = '' } = req.body || {};
  
  if (website) return res.status(200).json({ ok: true });           // honeypot
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Invalid email' });

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { error } = await supabase.from('subscribers').insert({ email });
  if (error && !/duplicate key/i.test(error.message)) {
    console.error('subscribe insert error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }

  // Optional: send a “Thanks for subscribing” email via Resend (free tier)
  if (process.env.RESEND_API_KEY && process.env.TO_EMAIL) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Portfolio <notifications@resend.dev>',
        to: [email],
        subject: 'Thanks for subscribing',
        html: `<p>You’re on the list ✅</p>`
      })
    }).catch(()=>{});
  }

  return res.status(200).json({ ok: true });
}
