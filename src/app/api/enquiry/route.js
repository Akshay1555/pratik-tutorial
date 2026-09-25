import { NextResponse } from "next/server";

// -----------------------------------------------------------------------------
// This route receives the Contact page enquiry form submissions.
// It currently just validates the payload and logs it on the server.
//
// To actually deliver enquiries to your team, wire this up to one of:
//   - An email service (Resend, SendGrid, Nodemailer + SMTP)
//   - A Google Sheet / CRM webhook
//   - A database (e.g. via Prisma) to view submissions in an admin panel
//
// Everywhere marked TODO below is where that integration would go.
// -----------------------------------------------------------------------------

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, message } = body || {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Basic phone sanity check (accepts digits, spaces, +, -)
    const phoneOk = /^[0-9+\-\s()]{7,15}$/.test(phone);
    if (!phoneOk) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    // TODO: send an email / push to CRM / append to a spreadsheet here.
    console.log("New PT MED enquiry:", {
      name,
      phone,
      email,
      course,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
