import { NextResponse } from "next/server";
import { z } from "zod";
import { registerBetaUser, sendBetaWelcomeEmail } from "@/lib/services/loops";

const betaSchema = z.object({
  email: z.string().email("Ungueltige E-Mail-Adresse"),
  name: z.string().min(1, "Name ist erforderlich"),
  company: z.string().min(1, "Unternehmen ist erforderlich"),
  newsletter: z.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = betaSchema.parse(body);

    await registerBetaUser({
      email: data.email,
      name: data.name,
      company: data.company,
      newsletter: data.newsletter,
    });

    // Send welcome email (non-blocking)
    sendBetaWelcomeEmail({
      email: data.email,
      name: data.name,
      company: data.company,
    }).catch((error) => {
      console.error("Failed to send beta welcome email:", error);
    });

    return NextResponse.json({
      success: true,
      message: "Beta-Registrierung erfolgreich",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validierungsfehler", details: error.issues },
        { status: 400 },
      );
    }

    if (error instanceof Error && error.message.includes("LOOPS_API_KEY")) {
      console.error("Loops API key not configured:", error.message);
      return NextResponse.json(
        { error: "Service nicht konfiguriert" },
        { status: 500 },
      );
    }

    console.error("Beta registration error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
