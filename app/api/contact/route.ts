import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// 1. Inicializamos o Resend fora da função (usando a variável de ambiente)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // 2. Extraímos os dados do corpo da requisição
        const body = await req.json();
        const { name, email, message } = body;

        // Validação básica
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Campos em falta" }, { status: 400 });
        }

        // 3. Enviamos o email usando a instância 'resend' que criámos acima
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'euclidesbaltazar2002@gmail.com',
            subject: `Novo Contacto: ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2>Nova mensagem do Portfólio</h2>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <hr />
                    <p><strong>Mensagem:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (err) {
        console.error("Erro no servidor:", err);
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}