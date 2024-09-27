"use client";
import { FormField, OptionsAnswerType } from "@/types/form";
import { ReactNode, createContext, useReducer, useState } from "react";

const FormContext = createContext({
  // fields: [],
  // showPreview: false,
  // togglePreview: () => {},
  // handleNewFieldSelect: (id: number, value: string) => {},
  // handleChange: (
  //   id: number,
  //   e: { target: { name: string; value: string } },
  // ) => {},
  // removeField: (id: number) => {},
  // formFields: [
  //   {
  //     id: 1,
  //     question: "",
  //     type: "radio",
  //   },
  // ],
  // addField: () => {},
  // handleAnswerOptionChange: (id: number, options: OptionsAnswerType[]) => {},
  handleTextResponse: (id: number, text: string) => {},
});

type InitialStateType = {
  fields: FormField[];
};
// todo: add types once we are syncing questions with responses
const reducer = (state: any, action: any) => {
  return state;
};

const initialState: InitialStateType = {
  fields: [],
};

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPreview, setShowPreview] = useState(false);

  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: 1,
      question: "",
      type: "radio",
      providedAnswersOptions: [],
      textAnswer: "",
    },
  ]);

  // const addField = () => {
  //   const newField = {
  //     id: formFields.length + 1,
  //     question: "",
  //     type: "radio", // default type
  //   };
  //   setFormFields([...formFields, newField]);
  // };

  // const removeField = (id: number) => {
  //   setFormFields(formFields.filter((field) => field.id !== id));
  // };

  // const handleChange = (
  //   id: number,
  //   e: {
  //     target: { name: string; value: string };
  //   },
  // ) => {
  //   const { name, value } = e.target;

  //   setFormFields(
  //     formFields.map((field) =>
  //       field.id === id ? { ...field, [name]: value } : field,
  //     ),
  //   );
  // };

  // const handleNewFieldSelect = (id: number, value: string) => {
  //   const newField = {
  //     id,
  //     question: "",
  //     type: value,
  //   };
  //   setFormFields([...formFields, newField]);
  // };

  // const togglePreview = () => {
  //   setShowPreview(!showPreview);
  // };

  // const handleAnswerOptionChange = (
  //   id: number,
  //   options: OptionsAnswerType[],
  // ) => {
  //   setFormFields(
  //     formFields?.map((field) =>
  //       field?.id === id
  //         ? { ...field, providedAnswersOptions: options }
  //         : field,
  //     ),
  //   );
  // };

  const handleTextResponse = (id: number, text: string) => {
    setFormFields(
      formFields?.map((field) =>
        field?.id === id ? { ...field, textAnswer: text } : field,
      ),
    );
  };

  const values = {
    // fields: state.fields,
    // showPreview,
    // togglePreview,
    // formFields,
    // addField,
    // removeField,
    // handleChange,
    // handleNewFieldSelect,
    // handleAnswerOptionChange,
    handleTextResponse,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
