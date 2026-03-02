import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, reason } = body;

        // Validate required fields
        if (!name || !email || !reason) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Email credentials.env missing (GMAIL_USER or GMAIL_APP_PASSWORD)');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email to Diamond Dental
        await transporter.sendMail({
            from: `"Diamond Dental Web" <${process.env.GMAIL_USER}>`,
            to: 'diamondental.clinica@gmail.com',
            replyTo: email,
            subject: `💎 Nueva consulta de ${name}`,
            html: `
                <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #ffffff; border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1a1a1a, #0d0d0d); padding: 40px 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <h1 style="font-size: 24px; margin: 0 0 8px; color: #c9a96e;">Diamond Dental</h1>
                        <p style="color: rgba(255,255,255,0.4); font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin: 0;">Nueva Consulta Web</p>
                    </div>
                    <div style="padding: 30px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 100px;">Nombre</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 15px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 15px;"><a href="mailto:${email}" style="color: #c9a96e; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Teléfono</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 15px;">${phone || 'No proporcionado'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Motivo</td>
                                <td style="padding: 12px 0; color: #ffffff; font-size: 15px; line-height: 1.6;">${reason}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="padding: 20px 30px; background: rgba(255,255,255,0.02); text-align: center;">
                        <p style="color: rgba(255,255,255,0.2); font-size: 11px; margin: 0;">Enviado desde diamonddental.co · Formulario de Contacto</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
