import { Schema, model } from "mongoose";

const surveySchema = new Schema({
  title: String,
  createdAt: Date,
  updatedAt: Date,
});
/***
 * 
 * For multiple choice 
 * each choice to have an id on post 
 * fields - id, qeuestionText, questionOptions ["a","b","V"] can hold an array of many, correctAmswer, questionType 
 */
export const Survey = model("Survey", surveySchema);
