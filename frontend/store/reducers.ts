import {
  ADD_FIELD,
  REMOVE_FIELD,
  UPDATE_FIELD,
  TOGGLE_PREVIEW,
  UPDATE_ANSWER_OPTION,
  UPDATE_TEXT_RESPONSE,
  CHECK_CORRECT_ANSWER,
} from "./actions";

const initialState = {
  formFields: [
    {
      id: 1,
      question: "",
      type: "radio",
      providedAnswersOptions: [],
      textAnswer: "",
      correctAnswer: "",
    },
  ],
  showPreview: false,
  correctAnswer: "",
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        formFields: [...state.formFields, action.payload],
      };

    case REMOVE_FIELD:
      return {
        ...state,
        formFields: state.formFields.filter(
          (field) => field.id !== action.payload,
        ),
      };

    case UPDATE_FIELD:
      return {
        ...state,
        formFields: state.formFields.map((field) =>
          field.id === action.payload.id
            ? { ...field, [action.payload.name]: action.payload.value }
            : field,
        ),
      };

    case CHECK_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswer: action.payload.text,
        formFields: state.formFields.map((field) =>
          field.id === action.payload.id
            ? { ...field, correctAnswer: action.payload.text }
            : field,
        ),
      };

    case TOGGLE_PREVIEW:
      return {
        ...state,
        showPreview: !state.showPreview,
      };

    case UPDATE_ANSWER_OPTION:
      return {
        ...state,
        formFields: state.formFields.map((field) =>
          field.id === action.payload.id
            ? { ...field, providedAnswersOptions: action.payload.options }
            : field,
        ),
      };

    case UPDATE_TEXT_RESPONSE:
      return {
        ...state,
        formFields: state.formFields.map((field) =>
          field.id === action.payload.id
            ? { ...field, textAnswer: action.payload.text }
            : field,
        ),
      };

    default:
      return state;
  }
};

export default formReducer;
