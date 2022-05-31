import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const  transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1e816310c362d7",
    pass: "fcf4ff46ebdf70"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Vinicius Mendes Lima <viniciusbhtorto@gmail.com>',
      subject: subject,
      html: body,
    });
  };
}