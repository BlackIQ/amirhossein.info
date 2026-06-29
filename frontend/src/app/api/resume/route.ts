import { API } from "@/api";

export async function GET() {
  try {
    const { data } = await API.get("resumes");

    return Response.json(
      {
        message: "Resumes fetched",
        resumes: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error fetching resumes",
        error,
      },
      { status: 500 },
    );
  }
}
