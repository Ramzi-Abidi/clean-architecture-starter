export interface IMailingService {
    sendInvitation(): Promise<void>;
    sendEmail(): Promise<void>;
}
