import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface ErrorResponse {
  name: string;
  message: string;
  code?: string;
}

type ResendResponse = {
  data: { id: string } | null;
  error: ErrorResponse | null;
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Send auto-response to the person who submitted the form
    const autoResponseHtml = `
      <div style="background-color: #f8f9fa; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 4px 6px rgba(28, 117, 187, 0.1);">
          <img src="https://dotonesolutions.co.ke/assets/images/logo/DotOne_Light.png" alt="DotOne Solutions" style="display: block; margin: 0 auto 30px; max-width: 200px;">
          <h1 style="color: #1C75BB; text-align: center; margin-bottom: 20px; font-size: 24px;">Thank You for Reaching Out</h1>
          <p style="color: #333333; margin-bottom: 20px;">Dear ${name},</p>
          <p style="color: #333333; margin-bottom: 20px;">Thank you for contacting DotOne Solutions. We have received your message and appreciate your interest in our organization.</p>
          <p style="color: #333333; margin-bottom: 20px;">Our team will carefully review your inquiry and respond as soon as possible, typically within 1-2 business days.</p>
          <div style="background-color: #f8f9fa; border-left: 4px solid #1C75BB; padding: 20px; margin: 30px 0;">
            <h3 style="color: #144C7F; margin-bottom: 15px;">For urgent matters:</h3>
            <p style="color: #333333; margin-bottom: 10px;">📞 Phone: +254 716 862 762</p>
            <p style="color: #333333;">⏰ Hours: Monday - Friday, 9:00 AM - 4:00 PM</p>
          </div>
          <p style="color: #333333; margin-bottom: 10px;">Best regards,</p>
          <p style="color: #1C75BB; font-weight: bold;">The DotOne Solutions Team</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666666; font-size: 12px; text-align: center;">This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `;

    // Send notification to DotOne Solutions
    const notificationHtml = `
      <div style="background-color: #f8f9fa; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 4px 6px rgba(28, 117, 187, 0.1);">
          <img src="https://dotonesolutions.co.ke/assets/images/logo/DotOne_Light.png" alt="DotOne Solutions" style="display: block; margin: 0 auto 30px; max-width: 200px;">
          <h1 style="color: #1C75BB; text-align: center; margin-bottom: 20px; font-size: 24px;">New Contact Form Submission</h1>
          <div style="background-color: #f8f9fa; border-left: 4px solid #1C75BB; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #144C7F; margin-bottom: 15px;">Contact Details:</h3>
            <p style="color: #333333; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="color: #333333; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="color: #333333; margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f8f9fa; border-left: 4px solid #144C7F; padding: 20px;">
            <h3 style="color: #144C7F; margin-bottom: 15px;">Message:</h3>
            <p style="color: #333333; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `;

    // Send auto-response
    const autoResponse: ResendResponse = await resend.emails.send({
      from: "DotOne Solutions <no-reply@mail.dotonesolutions.co.ke>",
      to: [email],
      subject: "Thank You for Contacting DotOne Solutions",
      html: autoResponseHtml,
    });

    if (autoResponse.error) {
      console.error("Auto-response Error:", autoResponse.error);
    }

    // Send notification
    const notification: ResendResponse = await resend.emails.send({
      from: "DotOne Solutions <no-reply@mail.dotonesolutions.co.ke>",
      to: ["info@dotonesolutions.co.ke"],
      subject: `New Contact Form: ${subject}`,
      html: notificationHtml,
      replyTo: email, // Fixed property name from reply_to to replyTo
    });

    if (notification.error) {
      console.error("Notification Error:", notification.error);
      return new Response(
        JSON.stringify({ error: notification.error.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: notification.data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("Server Error:", e);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
