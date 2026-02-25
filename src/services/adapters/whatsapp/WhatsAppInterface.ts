export interface WhatsAppMessage {
    phone: string;
    text: string;
}

export interface IWhatsAppService {
    sendMessage(message: WhatsAppMessage): void;
    getFormattedLink(message: WhatsAppMessage): string;
}
