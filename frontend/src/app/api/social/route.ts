import { API } from "@/api";

export async function GET() {
  try {
    const { data } = await API.get("socials");

    return Response.json(
      {
        message: "Socials fetched",
        socials: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error fetching socials",
        error,
      },
      { status: 500 },
    );
  }
}
