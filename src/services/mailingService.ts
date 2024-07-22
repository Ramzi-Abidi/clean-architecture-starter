import { IMailingService } from "../interfaces/mailer/IMailingService";

export class MailingService implements IMailingService {
    sendEmail(): Promise<void> {
        return new Promise(() => {
            console.log("Email sent!");
        });
    }
    sendInvitation(): Promise<void> {
        return new Promise(() => {
            console.log("Invaitation sent!");
        });
    }
}
