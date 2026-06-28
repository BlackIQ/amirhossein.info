import { Schema, model } from "mongoose";

import type { Message } from "@src/modules/message/message.type.js";

const schema = new Schema<Message>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const MessageModel = model<Message>("Message", schema);

export default MessageModel;
