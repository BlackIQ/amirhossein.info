import { API } from "@/api";

export async function GET() {
  try {
    const { data } = await API.get("experiences");

    return Response.json(
      {
        message: "Experiences fetched",
        experiences: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error fetching experiences",
        error,
      },
      { status: 500 },
    );
  }
}
