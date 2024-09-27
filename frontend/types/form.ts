export type FormField = {
  id: number;
  question: string;
  type: string;
  providedAnswersOptions?: OptionsAnswerType[];
  textAnswer?: string;
  correctAnswer?: string;
};

export type OptionsAnswerType = {
  id: number;
  optionLabel: string;
  value: string;
};
