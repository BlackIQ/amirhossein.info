import { Skill } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    if (data.parent) {
      const parentExists = await Skill.findById(data.parent);

      if (!parentExists) {
        return res.status(400).send({ message: "Parent skill not found" });
      }
    }

    const skill = await Skill.create(data);
    return res.status(201).send(skill);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const skills = await Skill.find()
      .populate("parent", "label value")
      .select("-createdAt -updatedAt -__v")
      .sort({ priority: 1 });

    const groupedSkills = skills.reduce((acc, skill) => {
      const key = skill.parent ? skill.parent._id.toString() : "top";
      if (!acc[key]) {
        acc[key] = {
          parent: skill.parent || null,
          children: [],
        };
      }
      acc[key].children.push(skill);
      return acc;
    }, {});

    const response = Object.values(groupedSkills).map(
      ({ parent, children }) => ({
        parent: parent
          ? { _id: parent._id, label: parent.label, value: parent.value }
          : null,
        children: children.sort((a, b) => a.priority - b.priority),
      })
    );

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send(skill);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findByIdAndDelete(id);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send({ message: "Skill deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const skill = await Skill.findByIdAndUpdate(id, data);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send({ message: "Skill updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
