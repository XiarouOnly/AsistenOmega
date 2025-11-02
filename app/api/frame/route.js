import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    "og:title": "Asisten Omega AI",
    "og:description": "Tanya AI langsung di Farcaster 🔥",
    "fc:frame": "vNext",
    "fc:frame:image": "https://placehold.co/600x400?text=Asisten+Omega+AI",
    "fc:frame:button:1": "Tanya AI",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": "https://asisten-omega.vercel.app/api/frame"
  });
}

export async function POST(req) {
  const body = await req.formData();
  const text = body.get("text") || "Ketik sesuatu...";
  return NextResponse.json({
    "fc:frame:image": `https://placehold.co/600x400?text=${encodeURIComponent("Jawaban: " + text)}`,
    "fc:frame:button:1": "Tanya lagi",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": "https://asisten-omega.vercel.app/api/frame"
  });
}
