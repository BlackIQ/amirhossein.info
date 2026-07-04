import { API } from "@/api";

import { NextRequest, NextResponse } from "next/server";

import { Message } from "@/types/message.type";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const data: Message = await req.json();

    await API.post("messages", data);

    return NextResponse.json(
      {
        message: "Message created",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error creating message", error);

    return NextResponse.json(
      {
        message: "Error creating message",
        error,
      },
      { status: 500 },
    );
  }
}
