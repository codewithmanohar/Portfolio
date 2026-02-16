import nodemailer from "nodemailer";

export async function GET() {
    return new Response("Contact API is running");
}

export async function POST(req) {
    try {
        const { email, message } = await req.json();

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS,
            },
        });


        const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <table style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px;">
        <tr>
          <td style="text-align: center;">
            <h2 style="margin-bottom: 5px; color: #333;">New Contact Message</h2>
            <p style="margin-top: 0; color: #777;">Someone submitted the contact form on your website.</p>
          </td>
        </tr>

        <tr>
          <td style="padding: 10px 0;">
            <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
          </td>
        </tr>

        <tr>
          <td style="padding-top: 15px;">
            <p style="font-weight: 600; margin-bottom: 8px;">Message:</p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 6px; color: #333; white-space: pre-line;">
              ${message}
            </p>
          </td>
        </tr>

        <tr>
          <td style="text-align: center; padding-top: 30px; color: #999; font-size: 12px;">
            This email was sent from your website contact form.
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
        // Email details
        await transporter.sendMail({
            from: email,
            to: process.env.USER_EMAIL,
            subject: `New Contact Message from Portfolio`,
            text: message,
            html:htmlTemplate,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
    }
}
