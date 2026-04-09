import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, subject, message } = await req.json();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portafolio <onboarding@resend.dev>",
    to: "juan.ordonezar@campusucc.edu.co",
    subject: subject || `Nuevo mensaje de ${firstName} ${lastName}`,
    html: `
      <h2>Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <hr/>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
