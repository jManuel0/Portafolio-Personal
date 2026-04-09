import { NextRequest, NextResponse } from "next/server";

const BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME!)}`;
const HEADERS = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

// GET — returns all testimonials
export async function GET() {
  const res = await fetch(
    `${BASE_URL}?sort[0][field]=name&sort[0][direction]=asc`,
    { headers: HEADERS, cache: "no-store" }
  );
  if (!res.ok) return NextResponse.json({ error: "Error fetching" }, { status: 500 });
  const data = await res.json();
  const testimonials = data.records.map((r: { id: string; fields: Record<string, unknown> }) => ({
    id: r.id,
    ...r.fields,
  }));
  return NextResponse.json(testimonials);
}

// POST — saves a new testimony (unapproved by default)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, position, content, rating } = body;
  if (!name || !content) {
    return NextResponse.json({ error: "Nombre y mensaje son requeridos" }, { status: 400 });
  }
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      records: [{ fields: { name, position, content, rating: Number(rating) || 5, Approved: false } }],
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: "Error saving", detail: err }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
