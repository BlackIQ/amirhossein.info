import { API } from "@/api";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { data } = await API.get("experiences");

    return NextResponse.json(
      {
        message: "Experiences fetched",
        experiences: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching experiences",
        error,
      },
      { status: 500 },
    );
  }
}
