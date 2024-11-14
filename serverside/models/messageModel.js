const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const messages = mongoose.model("message", messageSchema);
module.exports=messages
