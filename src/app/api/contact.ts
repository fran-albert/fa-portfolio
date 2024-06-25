import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
      });

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', (error as Error).message);
      return res.status(500).json({ message: 'Failed to send message', error: (error as Error).message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}