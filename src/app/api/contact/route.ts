import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'digitaljalpa Contact <contact@digitaljalpa.com>',
      to: ['jalpakamdar90@gmail.com'],
      subject: `✉️ New enquiry from ${name}${service ? ` — ${service}` : ''}`,
      replyTo: email,
      html: buildEmailHtml({ name, email, service, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function buildEmailHtml({
  name, email, service, message,
}: { name: string; email: string; service: string; message: string }) {
  const safeMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const safeName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeEmail = email.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeService = (service || '—').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const firstName = safeName.split(' ')[0].toUpperCase();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact — digitaljalpa</title>
</head>
<body style="margin:0;padding:0;background:#040d12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#0a1620;border:1px solid rgba(8,145,178,0.25);border-top:4px solid #0891B2;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 28px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;">
                <div style="width:12px;height:12px;background:#0891B2;border-radius:2px;transform:rotate(45deg);display:inline-block;"></div>
                <span style="font-size:16px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;margin-left:10px;">digitaljalpa</span>
              </div>
              <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#0891B2;text-transform:uppercase;">New Contact Enquiry</p>
              <h1 style="margin:8px 0 0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;line-height:1.15;">
                Message from <span style="color:#0891B2;">${safeName}</span>
              </h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0;" />
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;vertical-align:top;" width="50%">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.3);text-transform:uppercase;">Name</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${safeName}</p>
                  </td>
                  <td style="padding-bottom:20px;vertical-align:top;" width="50%">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.3);text-transform:uppercase;">Email</p>
                    <p style="margin:0;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#0891B2;text-decoration:none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;vertical-align:top;" colspan="2">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.3);text-transform:uppercase;">Looking for</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${safeService}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0;" />
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 40px 36px;">
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.3);text-transform:uppercase;">Message</p>
              <div style="border-left:3px solid #0891B2;padding:16px 20px;background:rgba(8,145,178,0.06);">
                <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.8);line-height:1.75;white-space:pre-wrap;">${safeMessage}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 40px;">
              <a href="mailto:${safeEmail}?subject=Re: Your enquiry — digitaljalpa"
                 style="display:inline-block;background:#0891B2;color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.1em;padding:14px 28px;border-radius:9999px;">
                REPLY TO ${firstName} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:rgba(0,0,0,0.3);padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">
                Sent via <strong style="color:rgba(255,255,255,0.4);">digitaljalpa.com</strong> · Contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
