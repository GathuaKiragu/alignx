module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let data;
  try {
    data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  if (!data || ['name', 'email', 'message'].some(
    field => typeof data[field] !== 'string' || !data[field].trim()
  ) || (data.subject !== undefined && typeof data.subject !== 'string')) {
    return res.status(400).json({ error: 'Please provide your name, email, and message.' });
  }

  try {
    const { sendContactEmails } = require('../server/mailer.js');
    await sendContactEmails(data);
    return res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      error: 'We could not send your inquiry. Please try again or email info@alignx.co.ke.'
    });
  }
};
