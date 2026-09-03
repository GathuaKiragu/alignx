import { createRequire } from 'node:module';
import type Nodemailer from 'nodemailer';

// Vercel emits this server module as ESM. Loading Nodemailer's CommonJS entry
// through Node's native require bridge keeps its built-in module imports (for
// example `events`, `stream`, and `crypto`) out of the ESM bundle shim.
const require = createRequire(import.meta.url);
const nodemailer: typeof Nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '41.80.37.8',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'info@alignx.co.ke',
    pass: process.env.SMTP_PASS || '25!w,?!+PL-o}yvJ'
  },
  tls: {
    rejectUnauthorized: false
  },
  // Keep SMTP failures inside the serverless function's execution window so
  // callers receive a useful JSON response instead of a platform timeout.
  connectionTimeout: 8_000,
  greetingTimeout: 8_000,
  socketTimeout: 15_000
});

const BRAND_GOLD = '#C99A3D';
const BRAND_DARK = '#00332A';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ConsultationPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

// 1. Send Contact Form Emails
export async function sendContactEmails(data: ContactPayload) {
  const { name, email, subject, message } = data;
  const inquirySubject = subject || 'General Inquiry';
  const timestamp = new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });

  // 1a. Notification to AlignX Team (To info@alignx.co.ke, CC alignx07@gmail.com)
  const adminNotificationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f5; margin: 0; padding: 20px; color: #22332D; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e6e3; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background-color: ${BRAND_DARK}; padding: 24px; text-align: center; color: #ffffff; border-bottom: 3px solid ${BRAND_GOLD}; }
        .header h1 { margin: 0; font-size: 20px; letter-spacing: 0.1em; }
        .header p { margin: 4px 0 0 0; color: ${BRAND_GOLD}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; }
        .content { padding: 28px; }
        .field { margin-bottom: 16px; }
        .label { font-size: 11px; text-transform: uppercase; color: #718096; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px; }
        .value { font-size: 14px; color: #1a202c; font-weight: 500; background: #f8faf9; padding: 10px 14px; border-radius: 6px; border-left: 3px solid ${BRAND_GOLD}; }
        .message-box { font-size: 14px; line-height: 1.6; color: #2d3748; background: #f8faf9; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { padding: 16px 28px; background-color: #edf2f0; font-size: 12px; color: #718096; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>ALIGNX CONSULTING</h1>
          <p>New Website Contact Inquiry</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Sender Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}" style="color: #00332A; text-decoration: underline;">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${inquirySubject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
          </div>
          <div class="field">
            <div class="label">Received At</div>
            <div style="font-size: 12px; color: #718096;">${timestamp} (EAT)</div>
          </div>
        </div>
        <div class="footer">
          AlignX Consulting Limited • Nairobi, Kenya • <a href="https://www.alignx.co.ke" style="color: ${BRAND_DARK};">www.alignx.co.ke</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // 1b. Acknowledgment to Sender (From info@alignx.co.ke)
  const userAckHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f7f3ea; margin: 0; padding: 24px; color: #1A2E28; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #EAE3D2; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .header { background-color: ${BRAND_DARK}; padding: 32px 24px; text-align: center; color: #ffffff; border-bottom: 3px solid ${BRAND_GOLD}; }
        .brand-title { font-size: 22px; font-weight: 700; letter-spacing: 0.2em; margin: 0; color: #ffffff; }
        .brand-sub { font-size: 9px; text-transform: uppercase; color: #E0BA6A; letter-spacing: 0.25em; margin-top: 6px; }
        .content { padding: 32px 28px; line-height: 1.6; }
        .salutation { font-size: 16px; font-weight: 600; color: ${BRAND_DARK}; margin-bottom: 12px; }
        .body-text { font-size: 14px; color: #4A5D55; margin-bottom: 20px; }
        .summary-card { background-color: #F7F3EA; border: 1px solid #EAE3D2; border-left: 4px solid ${BRAND_GOLD}; padding: 16px; border-radius: 6px; margin: 20px 0; }
        .summary-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${BRAND_DARK}; margin-bottom: 8px; }
        .summary-text { font-size: 13px; color: #5C6E67; font-style: italic; }
        .contact-info { margin-top: 28px; padding-top: 20px; border-top: 1px solid #EAE3D2; font-size: 13px; color: #5C6E67; }
        .footer { background-color: ${BRAND_DARK}; padding: 20px; text-align: center; font-size: 11px; color: rgba(255,255,255,0.7); }
        .footer a { color: ${BRAND_GOLD}; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="brand-title">ALIGNX</div>
          <div class="brand-sub">— CONSULTING LIMITED —</div>
          <div style="font-size: 12px; font-style: italic; color: ${BRAND_GOLD}; margin-top: 8px;">Beyond Consulting. We Execute.</div>
        </div>
        <div class="content">
          <div class="salutation">Dear ${name},</div>
          <div class="body-text">
            Thank you for reaching out to <strong>AlignX Consulting Limited</strong>. We have received your inquiry regarding <em>"${inquirySubject}"</em>.
          </div>
          <div class="body-text">
            Our execution partners are reviewing your message and will get back to you promptly with relevant insights and next steps.
          </div>
          <div class="summary-card">
            <div class="summary-title">Your Message Summary:</div>
            <div class="summary-text">"${message}"</div>
          </div>
          <div class="contact-info">
            <strong>AlignX Consulting Limited</strong><br>
            P O Box 52682-00100, Nairobi, Kenya<br>
            Tel: <a href="tel:+254792097347" style="color: ${BRAND_DARK}; text-decoration: none;">+254 792 097 347</a><br>
            Email: <a href="mailto:info@alignx.co.ke" style="color: ${BRAND_DARK}; text-decoration: none;">info@alignx.co.ke</a><br>
            Web: <a href="https://www.alignx.co.ke" style="color: ${BRAND_DARK};">www.alignx.co.ke</a>
          </div>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} AlignX Consulting Limited. All Rights Reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  // Send admin notification (To: info@alignx.co.ke, CC: alignx07@gmail.com)
  await transporter.sendMail({
    from: '"AlignX Website" <info@alignx.co.ke>',
    to: 'info@alignx.co.ke',
    cc: 'alignx07@gmail.com',
    replyTo: email,
    subject: `[Contact Form] ${inquirySubject} - from ${name}`,
    html: adminNotificationHtml
  });

  // The internal notification is the required delivery. An acknowledgment is
  // helpful, but a recipient-side rejection must not make a delivered inquiry
  // appear to have failed to the visitor.
  try {
    await transporter.sendMail({
      from: '"AlignX Consulting" <info@alignx.co.ke>',
      to: email,
      replyTo: 'info@alignx.co.ke',
      subject: `Thank you for contacting AlignX Consulting Limited`,
      html: userAckHtml
    });
  } catch (error) {
    console.error('Contact acknowledgment email failed:', error);
  }
}

// 2. Send Consultation Form Emails
export async function sendConsultationEmails(data: ConsultationPayload) {
  const { fullName, email, phone, company, service, message } = data;
  const timestamp = new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });

  // 2a. Admin Notification
  const adminNotificationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f5; margin: 0; padding: 20px; color: #22332D; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e6e3; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background-color: ${BRAND_DARK}; padding: 24px; text-align: center; color: #ffffff; border-bottom: 3px solid ${BRAND_GOLD}; }
        .header h1 { margin: 0; font-size: 20px; letter-spacing: 0.1em; }
        .header p { margin: 4px 0 0 0; color: ${BRAND_GOLD}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; }
        .content { padding: 28px; }
        .field { margin-bottom: 16px; }
        .label { font-size: 11px; text-transform: uppercase; color: #718096; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px; }
        .value { font-size: 14px; color: #1a202c; font-weight: 500; background: #f8faf9; padding: 10px 14px; border-radius: 6px; border-left: 3px solid ${BRAND_GOLD}; }
        .message-box { font-size: 14px; line-height: 1.6; color: #2d3748; background: #f8faf9; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { padding: 16px 28px; background-color: #edf2f0; font-size: 12px; color: #718096; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>ALIGNX CONSULTING</h1>
          <p>New Executive Consultation Request</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${fullName}</div>
          </div>
          <div class="field">
            <div class="label">Corporate Email</div>
            <div class="value"><a href="mailto:${email}" style="color: #00332A; text-decoration: underline;">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone Number</div>
            <div class="value">${phone || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Company / Organization</div>
            <div class="value">${company || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Service Focus Area</div>
            <div class="value">${service || 'General Transformation'}</div>
          </div>
          <div class="field">
            <div class="label">Project Brief / Strategic Objectives</div>
            <div class="message-box">${message || 'No additional notes provided.'}</div>
          </div>
          <div class="field">
            <div class="label">Submitted At</div>
            <div style="font-size: 12px; color: #718096;">${timestamp} (EAT)</div>
          </div>
        </div>
        <div class="footer">
          AlignX Consulting Limited • Nairobi, Kenya • <a href="https://www.alignx.co.ke" style="color: ${BRAND_DARK};">www.alignx.co.ke</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // 2b. User Acknowledgment
  const userAckHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f7f3ea; margin: 0; padding: 24px; color: #1A2E28; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #EAE3D2; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .header { background-color: ${BRAND_DARK}; padding: 32px 24px; text-align: center; color: #ffffff; border-bottom: 3px solid ${BRAND_GOLD}; }
        .brand-title { font-size: 22px; font-weight: 700; letter-spacing: 0.2em; margin: 0; color: #ffffff; }
        .brand-sub { font-size: 9px; text-transform: uppercase; color: #E0BA6A; letter-spacing: 0.25em; margin-top: 6px; }
        .content { padding: 32px 28px; line-height: 1.6; }
        .salutation { font-size: 16px; font-weight: 600; color: ${BRAND_DARK}; margin-bottom: 12px; }
        .body-text { font-size: 14px; color: #4A5D55; margin-bottom: 20px; }
        .summary-card { background-color: #F7F3EA; border: 1px solid #EAE3D2; border-left: 4px solid ${BRAND_GOLD}; padding: 16px; border-radius: 6px; margin: 20px 0; }
        .summary-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${BRAND_DARK}; margin-bottom: 8px; }
        .summary-item { font-size: 13px; color: #5C6E67; margin-bottom: 4px; }
        .contact-info { margin-top: 28px; padding-top: 20px; border-top: 1px solid #EAE3D2; font-size: 13px; color: #5C6E67; }
        .footer { background-color: ${BRAND_DARK}; padding: 20px; text-align: center; font-size: 11px; color: rgba(255,255,255,0.7); }
        .footer a { color: ${BRAND_GOLD}; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="brand-title">ALIGNX</div>
          <div class="brand-sub">— CONSULTING LIMITED —</div>
          <div style="font-size: 12px; font-style: italic; color: ${BRAND_GOLD}; margin-top: 8px;">Beyond Consulting. We Execute.</div>
        </div>
        <div class="content">
          <div class="salutation">Dear ${fullName},</div>
          <div class="body-text">
            Thank you for requesting an executive consultation with <strong>AlignX Consulting Limited</strong>.
          </div>
          <div class="body-text">
            An AlignX leadership partner is reviewing your initiative details and will connect with you within 24 hours to schedule your briefing.
          </div>
          <div class="summary-card">
            <div class="summary-title">Consultation Brief Details:</div>
            <div class="summary-item"><strong>Service Area:</strong> ${service || 'General'}</div>
            ${company ? `<div class="summary-item"><strong>Organization:</strong> ${company}</div>` : ''}
            ${phone ? `<div class="summary-item"><strong>Contact Phone:</strong> ${phone}</div>` : ''}
          </div>
          <div class="contact-info">
            <strong>AlignX Consulting Limited</strong><br>
            P O Box 52682-00100, Nairobi, Kenya<br>
            Tel: <a href="tel:+254792097347" style="color: ${BRAND_DARK}; text-decoration: none;">+254 792 097 347</a><br>
            Email: <a href="mailto:info@alignx.co.ke" style="color: ${BRAND_DARK}; text-decoration: none;">info@alignx.co.ke</a><br>
            Web: <a href="https://www.alignx.co.ke" style="color: ${BRAND_DARK};">www.alignx.co.ke</a>
          </div>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} AlignX Consulting Limited. All Rights Reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  // Send admin notification (To info@alignx.co.ke, CC alignx07@gmail.com)
  await transporter.sendMail({
    from: '"AlignX Consultation" <info@alignx.co.ke>',
    to: 'info@alignx.co.ke',
    cc: 'alignx07@gmail.com',
    replyTo: email,
    subject: `[Consultation Request] ${service || 'New Request'} - ${fullName} ${company ? `(${company})` : ''}`,
    html: adminNotificationHtml
  });

  // Do not fail a successfully delivered consultation request just because the
  // visitor's mail server rejects or delays the optional acknowledgment.
  try {
    await transporter.sendMail({
      from: '"AlignX Consulting" <info@alignx.co.ke>',
      to: email,
      replyTo: 'info@alignx.co.ke',
      subject: `AlignX Consulting - Consultation Request Received`,
      html: userAckHtml
    });
  } catch (error) {
    console.error('Consultation acknowledgment email failed:', error);
  }
}
