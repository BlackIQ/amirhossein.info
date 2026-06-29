import { API } from "@/api";

export async function GET() {
  try {
    const { data } = await API.get("skills");

    return Response.json(
      {
        message: "Skills fetched",
        skills: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error fetching skills",
        error,
      },
      { status: 500 },
    );
  }
}
