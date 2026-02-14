import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Garante que o TS saiba que a chave pode ser string ou undefined
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Campos em falta" }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'euclidesbaltazar2002@gmail.com', // O destino final é AQUI
            subject: `Novo Contacto: ${name}`,
            replyTo: email, // CORRIGIDO: de reply_to para replyTo
            html: `
                <div style="font-family: sans-serif; line-height: 1.5;">
                    <h2>Nova mensagem do Portfólio</h2>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <hr />
                    <p><strong>Mensagem:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error("Erro Resend:", error);
        return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
    }
}