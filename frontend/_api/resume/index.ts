import { API } from "@/api";

export default async function resume(req, res) {
  try {
    const { data } = await API.get("resumes");

    return res.status(200).send({ message: "Resumes fetched", resumes: data });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ message: "Error fetching resumes", error });
  }
}
