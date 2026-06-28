import { Message } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    if (!data.message || data.message === "") {
      return res.status(400).send({ message: "Fill message fields please" });
    }
    if (!data.name || data.name === "") {
      return res.status(400).send({ message: "Fill name fields please" });
    }

    if (!data.email || data.email === "") {
      return res.status(400).send({ message: "Fill email fields please" });
    }

    await Message.create(data);

    return res.status(200).send({ message: "Thanks for your message" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const messages = await Message.find();

    return res.status(200).send(messages);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).send({ message: "Message did not found" });
    }

    return res.status(200).send(message);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).send({ message: "Message did not found" });
    }

    return res.status(200).send({ message: "Message deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const message = await Message.findByIdAndUpdate(id, data);

    if (!message) {
      return res.status(404).send({ message: "Message did not found" });
    }

    return res.status(200).send({ message: "Message updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
