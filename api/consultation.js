const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '41.80.37.8',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'info@alignx.co.ke',
    pass: process.env.SMTP_PASS || '25!w,?!+PL-o}yvJ'
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 8_000,
  greetingTimeout: 8_000,
  socketTimeout: 15_000
});

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!data || !data.fullName || !data.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const fullName = escapeHtml(data.fullName);
    const email = String(data.email).trim();
    const safeEmail = escapeHtml(email);
    const phone = escapeHtml(data.phone || 'Not provided');
    const company = escapeHtml(data.company || 'Not provided');
    const service = escapeHtml(data.service || 'General Transformation');
    const message = escapeHtml(data.message || 'No additional notes provided.');
    const timestamp = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi'
    });

    await transporter.sendMail({
      from: '"AlignX Consultation" <info@alignx.co.ke>',
      to: 'info@alignx.co.ke',
      cc: 'alignx07@gmail.com',
      replyTo: email,
      subject: `[Consultation Request] ${service} - ${fullName}`,
      html: `
        <h2>New Executive Consultation Request</h2>
        <p><strong>Full name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Project brief:</strong></p>
        <p>${message}</p>
        <p><small>Submitted ${escapeHtml(timestamp)} (EAT)</small></p>
      `
    });

    // The internal notification is the required delivery. A recipient-side
    // rejection of this optional acknowledgment must not fail the submission.
    try {
      await transporter.sendMail({
        from: '"AlignX Consulting" <info@alignx.co.ke>',
        to: email,
        replyTo: 'info@alignx.co.ke',
        subject: 'AlignX Consulting - Consultation Request Received',
        html: `
          <h2>Consultation Request Received</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for requesting an executive consultation with AlignX Consulting Limited.</p>
          <p>An AlignX leadership partner will review your initiative and contact you within 24 hours.</p>
        `
      });
    } catch (error) {
      console.error('Consultation acknowledgment email failed:', error);
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation request received successfully.'
    });
  } catch (error) {
    console.error('Consultation handler error:', error);
    return res.status(500).json({
      error: error && error.message ? error.message : 'Internal server error'
    });
  }
};
