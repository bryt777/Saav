import { NextRequest, NextResponse } from "next/server";
import { rebuildSave } from "@/lib/writer";

export async function POST(req: NextRequest) {
  const file = Buffer.from(await req.arrayBuffer());

  const newSave = rebuildSave(file, {
    graphics: {
      artQuality: 1,
      fpsLevel: 1,
      brightness: 30
    }
  });

  return new NextResponse(newSave, {
    headers: {
      "Content-Disposition":
        'attachment; filename="Active.sav"',
      "Content-Type": "application/octet-stream"
    }
  });
}
