import { Resume } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const resume = await Resume.create(data);

    return res.status(200).send(resume);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ priority: 1 });

    return res.status(200).send(resumes);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).send({ message: "Resume did not found" });
    }

    return res.status(200).send(resume);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const resume = await Resume.findByIdAndDelete(id);

    if (!resume) {
      return res.status(404).send({ message: "Resume did not found" });
    }

    return res.status(200).send({ message: "Resume deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const resume = await Resume.findByIdAndUpdate(id, data);

    if (!resume) {
      return res.status(404).send({ message: "Resume did not found" });
    }

    return res.status(200).send({ message: "Resume updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
