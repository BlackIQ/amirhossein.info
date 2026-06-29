import { API } from "@/api";

export default async function skill(req, res) {
  try {
    const { data } = await API.get("skills");

    return res.status(200).send({ message: "Skills fetched", skills: data });
  } catch (error) {
    return res.status(500).send({ message: "Error fetching skills", error });
  }
}
