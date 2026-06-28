import { Experience } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const experience = await Experience.create(data);

    return res.status(200).send(experience);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ priority: 1 });

    return res.status(200).send(experiences.reverse());
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send(experience);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findByIdAndDelete(id);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send({ message: "Experience deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const experience = await Experience.findByIdAndUpdate(id, data);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send({ message: "Experience updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
