import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// Email address where you want to receive contact form submissions
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@stargatepressurewashing.com";

// Lazy initialization to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Find service title from ID
    const serviceTitle = service 
      ? siteConfig.services.find(s => s.id === service)?.title || service
      : "Not specified";

    // Get Resend instance
    const resend = getResend();

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Change this after verifying your domain
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0;">From ${siteConfig.name} Website</p>
          </div>
          
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #374151; font-size: 18px; margin: 0 0 16px 0;">Contact Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #7c3aed; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${address ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Address:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${address}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Service:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${serviceTitle}</td>
              </tr>
            </table>
            
            ${message ? `
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <h3 style="color: #374151; font-size: 16px; margin: 0 0 8px 0;">Message</h3>
              <p style="color: #4b5563; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ""}
            
            <div style="margin-top: 24px; padding: 16px; background: #ede9fe; border-radius: 8px;">
              <p style="color: #5b21b6; margin: 0; font-size: 14px;">
                <strong>Quick Actions:</strong><br>
                <a href="tel:${phone}" style="color: #7c3aed;">📞 Call ${name}</a> | 
                <a href="mailto:${email}" style="color: #7c3aed;">✉️ Reply via Email</a>
              </p>
            </div>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            This email was sent from your website contact form at ${siteConfig.url}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Optionally send confirmation email to customer
    await resend.emails.send({
      from: "Stargate Pressure Washing <onboarding@resend.dev>", // Change after domain verification
      to: email,
      subject: `Thanks for contacting ${siteConfig.name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">${siteConfig.name}</h1>
          </div>
          
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 16px 0;">Thanks for reaching out, ${name}!</h2>
            
            <p style="color: #4b5563; line-height: 1.6;">
              We've received your request for a free quote and will get back to you within 24 hours.
            </p>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Need immediate assistance? Give us a call:
            </p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="tel:${siteConfig.phoneRaw}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">
                📞 ${siteConfig.phone}
              </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
              Best regards,<br>
              The ${siteConfig.name} Team
            </p>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            ${siteConfig.address.city}, ${siteConfig.address.state} | ${siteConfig.phone} | ${siteConfig.email}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

