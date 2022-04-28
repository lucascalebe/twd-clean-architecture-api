import { EmailOptions } from '@/usecases/send-email/ports'

const attachments = [{
  filename: 'text.txt',
  path: '../../resources/text.txt'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Lucas Calebe | lucascalebe <lucascalebe07@hotmail.com>'
  const to = ''
  const mailOptions: EmailOptions = {
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT),
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    from: from,
    to: to,
    subject: 'Mensagem de teste',
    text: 'Texto da mensagem',
    html: '<b>< texto da mensagem /b>',
    attachemnts: attachments
  }
  return mailOptions
}
