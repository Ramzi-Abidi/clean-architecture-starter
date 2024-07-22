// Establish a clear mapping between abstract names (like "UserRepository", "AuthInteractor", and "AuthController") and their corresponding symbols.
// This approach is used in dependency injection to bind interfaces or services to concrete implementations.

export const INTERFACE_TYPE = {
    UserRepository: Symbol.for("UserRepository"),
    AuthInteractor: Symbol.for("AuthInteractor"),
    AuthController: Symbol.for("AuthController"),
    MailingService: Symbol.for("MailingService"),
    IMailingService: Symbol.for("IMailingService"),
};
