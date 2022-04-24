import { Right } from '@/shared/either'
import { MailServiceError } from '@/usecases/errors/mail-service-error'
import { Either, right } from '@/shared'
import { EmailOptions, EmailService } from '@/usecases/send-email/ports'
import { SendEmail } from '@/usecases/send-email'

const attachmentFilePath = '../resources/text.txt'
const fromName = 'Test'
const fromEmail = 'from_email@mail.com'
const toName = 'any_name'
const toEmail = 'any_email@email.com'
const subject = 'Test e-mail'
const emailBody = 'Hello world attachment test'
const emailBodyHtml = '<b>Hello world attachment test</b>'
const attachment = [{
  fileName: attachmentFilePath,
  contentType: 'text/plain'
}]

const mailOptions: EmailOptions = {
  host: 'test',
  port: 867,
  username: 'test',
  password: 'test',
  from: fromName + ' ' + fromEmail,
  to: toName + '<' + toEmail + '>',
  subject: subject,
  text: emailBody,
  html: emailBodyHtml,
  attachemnts: attachment
}

class MailServiceStub implements EmailService {
  async send (emailOptions: EmailOptions): Promise<Either<MailServiceError, EmailOptions>> {
    return right(emailOptions)
  }
}

describe('Send email to user', () => {
  test('should email user with valid name and email address', async () => {
    const mailServiceStub = new MailServiceStub()
    const useCase = await new SendEmail(mailOptions, mailServiceStub)
    const response = await useCase.perform({ name: toName, email: toEmail })
    expect(response).toBeInstanceOf(Right)
  })
})
