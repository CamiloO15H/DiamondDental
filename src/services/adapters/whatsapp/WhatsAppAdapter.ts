import { IWhatsAppService, WhatsAppMessage } from "./WhatsAppInterface";

export class WhatsAppAdapter implements IWhatsAppService {
    sendMessage(message: WhatsAppMessage): void {
        const link = this.getFormattedLink(message);
        window.open(link, "_blank");
    }

    getFormattedLink(message: WhatsAppMessage): string {
        const encodedText = encodeURIComponent(message.text);
        return `https://wa.me/${message.phone}?text=${encodedText}`;
    }
}

export const whatsAppService: IWhatsAppService = new WhatsAppAdapter();
