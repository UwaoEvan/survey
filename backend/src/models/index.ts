import { Schema, model } from "mongoose";

const surveySchema = new Schema({
  title: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Survey = model("Survey", surveySchema);
