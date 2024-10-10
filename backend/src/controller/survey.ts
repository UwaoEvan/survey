import { Survey } from "../models";

export const createSurvey = async (title: string, survey: string) => {
  try {
    const newSurvey = await Survey.create({
      title,
      survey,
    });
    return newSurvey;
  } catch (error) {
    throw error;
  }
}

export const deleteSurvey = async (id: string) => {
  try {
    const record = await Survey.findByIdAndDelete(id);
    if (!record) {
      throw new Error(`Survey with the id of ${id} not found`)
    }

  return record;    
  } catch (error) {
    throw error;
  }
}