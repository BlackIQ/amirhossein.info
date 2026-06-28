export const PING = async (req, res) => {
  return res.status(200).send({ message: "Pong" });
};

export const IP = async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  return res.status(200).send({ ip });
};
