import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    hospitalAddress: {
      type: {},
      required: true,
    },
    specialisation: {
      type: {},
      required: true,
    },
    availability: [
      {
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    ],
    hierarchyRole: {
      type: Number,
      default: 0,
    },
    role: {
      type: "String",
      default: "Doctor",
    },
  },
  { timestamps: true }
);

export default mongoose.model("doctors", doctorSchema);
