import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobileNumber: {
      type: Number,
      required: true,
      min:10,
    },
    message: {
      type: String,
      required: true,
      min: 10,
    },

    location: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
