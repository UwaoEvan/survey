import { OptionsAnswerType } from "@/types/form";

export const ADD_FIELD = "ADD_FIELD";
export const REMOVE_FIELD = "REMOVE_FIELD";
export const UPDATE_FIELD = "UPDATE_FIELD";
export const TOGGLE_PREVIEW = "TOGGLE_PREVIEW";
export const UPDATE_ANSWER_OPTION = "UPDATE_ANSWER_OPTION";
export const UPDATE_TEXT_RESPONSE = "UPDATE_TEXT_RESPONSE";

export const addField = () => ({
  type: ADD_FIELD,
});

export const removeField = (id: number) => ({
  type: REMOVE_FIELD,
  payload: id,
});

export const updateField = (id: number, name: string, value: string) => ({
  type: UPDATE_FIELD,
  payload: { id, name, value },
});

export const togglePreview = () => ({
  type: TOGGLE_PREVIEW,
});

export const updateAnswerOption = (
  id: number,
  options: OptionsAnswerType[],
) => ({
  type: UPDATE_ANSWER_OPTION,
  payload: { id, options },
});

export const updateTextResponse = (id: number, text: string) => ({
  type: UPDATE_TEXT_RESPONSE,
  payload: { id, text },
});
