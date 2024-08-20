const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    receiverId: {
      type: String,
      require:true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
