import { API } from "@/api";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { data } = await API.get("socials");

    return NextResponse.json(
      {
        message: "Socials fetched",
        socials: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching socials",
        error,
      },
      { status: 500 },
    );
  }
}
