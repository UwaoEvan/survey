import { Schema, model } from "mongoose";

const surveySchema = new Schema({
  id: Number,
  title: String,
});

export const Survey = model("Survey", surveySchema);
