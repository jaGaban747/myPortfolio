import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return json({ error: "Please complete all fields." }, 400);
    }

    if (!emailRegex.test(email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    if (
      name.length > 100 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return json({ error: "One of the fields is too long." }, 400);
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return json({ error: "Email service is not configured." }, 500);
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "leon.changara@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return json({ error: "The message could not be sent." }, 502);
    }

    return json({ message: "Message sent." }, 200);
  } catch (err) {
    console.error("Contact route error:", err);
    return json({ error: "Something went wrong." }, 500);
  }
}