import { appConfig } from "$app/config/index.js";

const key = async (req, res, next) => {
  const { apikey } = req.headers;

  if (!apikey) {
    return res.status(401).json({ message: "Unautorized" });
  }

  if (apikey !== appConfig.key) {
    return res.status(401).json({ message: "Unautorized" });
  }

  next();
};

export default key;
