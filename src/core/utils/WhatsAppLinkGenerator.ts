export class WhatsAppLinkGenerator {
    private static readonly BASE_URL = "https://wa.me";
    private static readonly PHONE_NUMBER = "573148311777";

    /**
     * Generates a generic WhatsApp link with a predefined message.
     */
    static generateGenericLink(message: string = "Hola Diamond Dental, me gustaría agendar una valoración."): string {
        const encodedMessage = encodeURIComponent(message);
        return `${this.BASE_URL}/${this.PHONE_NUMBER}?text=${encodedMessage}`;
    }

    /**
     * Generates a targeted WhatsApp link for specific services or specialists.
     */
    static generateBookingLink(doctorName: string, serviceName: string): string {
        const message = `Hola Diamond Dental, quiero agendar una valoración con ${doctorName} para un tratamiento de ${serviceName}. Vengo desde la página web.`;
        const encodedMessage = encodeURIComponent(message);
        return `${this.BASE_URL}/${this.PHONE_NUMBER}?text=${encodedMessage}`;
    }

    /**
     * Generates a WhatsApp link for a specific review result.
     */
    static generateReviewLink(treatment: string, specialist: string, link: string): string {
        const message = `Hola Diamond Dental, estaba viendo sus reseñas y me encantó este resultado de ${treatment} con ${specialist}. Quisiera más información. Aquí está el video: ${link}`;
        const encodedMessage = encodeURIComponent(message);
        return `${this.BASE_URL}/${this.PHONE_NUMBER}?text=${encodedMessage}`;
    }
}
