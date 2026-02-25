# Diamond Dental Architecture Guide

Este proyecto utiliza una arquitectura basada en **Screaming Architecture** y el patrón **Ports & Adapters**, diseñada para ser escalable, testeable y fácilmente integrable con herramientas de IA (Antigravity-ready).

## Estructura de Carpetas

### `src/core`
Contiene los "cimientos" del sistema. Interfaces, tipos base y constantes de diseño que no cambian frecuentemente.
- `src/core/interfaces`: Definiciones de TypeScript que actúan como contratos para todo el sistema.

### `src/features`
Organizado por dominios funcionales. Cada característica es autocontenida.
- `src/features/landing`: Lógica, componentes y hooks específicos para la landing page.
- `src/features/appointments`: (Sugerencia) Para manejar la lógica de agendamiento futura.

### `src/shared`
Componentes y utilidades que se reutilizan en múltiples features.
- `src/shared/components`: Navbar, Footer, UI Kit local.

### `src/services/adapters`
Implementación del patrón **Adapter**. Aquí desacoplamos los servicios externos de nuestra lógica de negocio.
- `whatsapp/`: Implementa `IWhatsAppService`. Si mañana cambiamos a una API de Twilio, solo editamos este adaptador.

## Principios Aplicados

1. **Desacoplamiento Estricto**: Los componentes de UI (`Presentation`) no saben cómo se envía un mensaje de WhatsApp; solo llaman a un hook que utiliza el adaptador.
2. **i18n Nativo**: Uso de `next-intl` con Routing Internacional. Los diccionarios están en `/messages`.
3. **Estética Premium**: Uso intensivo de Framer Motion y Tailwind CSS con una paleta de colores personalizada (`Black Matte`, `Diamond Silver`).

## Guía de Escalabilidad

Para agregar una nueva funcionalidad (ej. Módulo de Pagos):
1. Define la interfaz en `src/core/interfaces/IPaymentService.ts`.
2. Crea el adaptador en `src/services/adapters/payment/StripeAdapter.ts`.
3. Crea un Custom Hook en `src/features/checkout/hooks/usePayment.ts` que inyecte el servicio.
4. Implementa los componentes presentacionales en `src/features/checkout/components/`.

---
*Desarrollado con excelencia por Diamond Dental Tech Team.*
