interface IMailTo {
    name: String,
    email: String
}

interface IMailMessage {
    subject: String,
    body: String,
    attachment?: Array<String>
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IMailService {
    sendMail(request: IMessageDTO): void
}

class EmailService implements IMailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}<${to.email}>`)
        console.log(`Mensagem: ${message.subject}; ${message.body}`)
    }
}

export default EmailService