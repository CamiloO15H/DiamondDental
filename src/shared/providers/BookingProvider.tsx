"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/shared/components/BookingModal"), {
    ssr: false,
});

interface BookingContextType {
    openBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
    openBooking: () => { },
});

export function useBooking() {
    return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BookingContext.Provider value={{ openBooking: () => setIsOpen(true) }}>
            {children}
            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </BookingContext.Provider>
    );
}
