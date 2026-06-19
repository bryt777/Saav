import { NextRequest, NextResponse } from "next/server";
import { parseSave } from "@/lib/parser";

export async function POST(req: NextRequest) {
  const file = await req.arrayBuffer();

  const data = parseSave(Buffer.from(file));

  return NextResponse.json(data);
}
