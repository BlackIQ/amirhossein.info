import { API } from "@/api";

export default async function experience(req, res) {
  try {
    const { data } = await API.get("experiences");

    return res
      .status(200)
      .send({ message: "Experiences fetched", experiences: data });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .send({ message: "Error fetching experiences", error });
  }
}
