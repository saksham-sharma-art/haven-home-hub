import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, phone, checkInDate, roomType, roomPrice, message } = await req.json();

    if (!name || !email || !phone || !checkInDate) {
      throw new Error("Missing required fields");
    }

    const emailResponse = await resend.emails.send({
      from: "Cozy Heaven <onboarding@resend.dev>",
      to: ["cozyheaven111@gmail.com"],
      subject: `New Booking Inquiry - ${roomType} from ${name}`,
      html: `
        <h2>New Booking Inquiry - Cozy Heaven Stay</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Room Type:</td><td style="padding:8px;">${roomType}</td></tr>
          ${roomPrice ? `<tr><td style="padding:8px;font-weight:bold;">Price:</td><td style="padding:8px;">${roomPrice}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;">Check-in Date:</td><td style="padding:8px;">${checkInDate}</td></tr>
          ${message ? `<tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${message}</td></tr>` : ""}
        </table>
      `,
    });

    console.log("Booking email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending booking email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
