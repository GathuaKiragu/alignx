import type { ConsultationPayload } from '../server/mailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: ConsultationPayload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!data.fullName || !data.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Load the SMTP implementation only after the request has been validated.
    // This keeps dependency-loading failures inside this handler's JSON error
    // boundary instead of crashing the serverless function during startup.
    const { sendConsultationEmails } = await import('../server/mailer');
    await sendConsultationEmails(data);
    return res.status(200).json({ success: true, message: 'Consultation request received and email sent successfully.' });
  } catch (error: any) {
    console.error('Consultation handler error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
