export async function GET() {
  return Response.json(
    {
      message: "Service is running",
    },
    { status: 200 },
  );
}
