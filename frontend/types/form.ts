export type FormField = {
  id: number;
  question: string;
  type: string;
  providedAnswersOptions?: OptionsAnswerType[];
  textAnswer?: string;
  categoryAnswer?: string; //todo: to be updated
};

export type OptionsAnswerType = {
  id: number;
  optionLabel: string;
  value: string;
};

export type CommentType = {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
    createdAt: string;
  };
  comment: string;
  responses: {
    id: number;
    user: {
      id: number;
      name: string;
      avatar: string;
      createdAt: string;
    };
    comment: string;
  }[];
};

export type SingleCommentType = {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
    createdAt: string;
  };
  comment: string;
};
