import { API } from "@/api";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { data } = await API.get("resumes");

    return NextResponse.json(
      {
        message: "Resumes fetched",
        resumes: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching resumes",
        error,
      },
      { status: 500 },
    );
  }
}
