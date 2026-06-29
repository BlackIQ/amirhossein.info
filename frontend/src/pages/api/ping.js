export default function ping(req, res) {
  console.log("==========================");
  console.log("Here it is");
  console.log("==========================");

  return res.status(200).send({ message: "Ok" });
}
