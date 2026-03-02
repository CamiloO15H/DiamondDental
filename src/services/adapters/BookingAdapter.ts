export interface BookingData {
    name: string;
    treatment: string;
}

export interface IBookingAdapter {
    scheduleAppointment(data: BookingData, template: string): void;
}

class WhatsAppBookingAdapter implements IBookingAdapter {
    private readonly phoneNumber: string = "573148311777";

    scheduleAppointment(data: BookingData, template: string): void {
        const message = template
            .replace("{name}", data.name)
            .replace("{treatment}", data.treatment);

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    }
}

export const bookingAdapter: IBookingAdapter = new WhatsAppBookingAdapter();
