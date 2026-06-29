import { API } from "@/api";

export default async function social(req, res) {
  try {
    const { data } = await API.get("socials");

    return res.status(200).send({ message: "Socials fetched", socials: data });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ message: "Error fetching socials", error });
  }
}
