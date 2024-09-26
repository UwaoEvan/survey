import { Schema, model } from "mongoose";

const surveySchema = new Schema({
  id: String,
  title: String,
});

export const Survey = model("Survey", surveySchema);
