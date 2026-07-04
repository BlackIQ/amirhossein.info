import { API } from "@/api";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { data } = await API.get("skills");

    return NextResponse.json(
      {
        message: "Skills fetched",
        skills: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching skills",
        error,
      },
      { status: 500 },
    );
  }
}
