import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["radio", "checkbox", "dropdown"],
    required: true,
  },
});

const surveySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    survey: {
      type: [questionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Survey = model("Survey", surveySchema);
