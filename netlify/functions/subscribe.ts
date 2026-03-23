import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { email, name } = JSON.parse(event.body || "{}");

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Email non valida" }) };
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Configurazione mancante" }) };
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        fields: { name: name?.trim() || "" },
        groups: ["182724629159216321"],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("MailerLite error:", err);
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Errore nell'iscrizione" }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("Subscribe error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Errore interno" }) };
  }
};

export { handler };
