import { sendContactEmails, ContactPayload } from '../server/mailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: ContactPayload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await sendContactEmails(data);
    return res.status(200).json({ success: true, message: 'Inquiry received and email sent successfully.' });
  } catch (error: any) {
    console.error('Contact handler error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
