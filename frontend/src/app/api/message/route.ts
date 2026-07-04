import { API } from "@/api";

import { NextRequest } from "next/server";

import { Message } from "@/types/message.type";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const data: Message = await req.json();

    await API.post("messages", data);

    return Response.json(
      {
        message: "Message created",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error creating message", error);

    return Response.json(
      {
        message: "Error creating message",
        error,
      },
      { status: 500 },
    );
  }
}
