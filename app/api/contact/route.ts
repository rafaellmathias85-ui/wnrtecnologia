import { NextResponse } from "next/server";
import { z } from "zod";
import { solutions } from "@/lib/solutions";

const solutionSlugs = solutions.map((solution) => solution.slug) as [string, ...string[]];

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um email valido."),
  phone: z.string().min(10, "Informe um telefone valido."),
  company: z.string().min(2, "Informe sua empresa."),
  solution: z.enum(solutionSlugs, { errorMap: () => ({ message: "Selecione uma solucao valida." }) }),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres."),
  website: z.string().optional(),
  recaptchaToken: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || "Dados invalidos." },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: "Mensagem recebida." });
    }

    // Placeholder: validar reCAPTCHA v3 e enviar por SMTP, SendGrid ou Resend.
    // Exemplo futuro: await resend.emails.send({ to, subject, react/template });
    console.info("Novo contato WNR", {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      solution: parsed.data.solution
    });

    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch {
    return NextResponse.json({ message: "Nao foi possivel processar a mensagem." }, { status: 500 });
  }
}
