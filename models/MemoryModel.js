import mongoose from "mongoose";

const memorySchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },

  title: {
    type: String,
    required: true
  },

  eventType: {
    type: String,
    required: true
  },

  mood: {
    type: String,
    required: true
  }

});

export default mongoose.model("Memory", memorySchema);
