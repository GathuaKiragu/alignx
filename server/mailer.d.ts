import type { Transporter } from 'nodemailer';

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

export const transporter: Transporter;
export function sendContactEmails(data: ContactPayload): Promise<void>;
export function sendConsultationEmails(data: ConsultationPayload): Promise<void>;
