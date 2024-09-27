"use client";
import { FormField } from "@/types/form";
import Checkbox from "./input-types/checkbox";
import DropDown from "./input-types/dropdown";
import RadioButton from "./input-types/radio-button";

type FormPreviewProps = {
  formFields: FormField[];
};

export default function FormPreview(props: FormPreviewProps) {
  const { formFields } = props;
  const renderField = (field: FormField) => {
    switch (field.type) {
      case "radio":
        return (
          <RadioButton key={field.id} label={field.question} field={field} />
        );
      case "checkbox":
        return <Checkbox key={field.id} label={field.question} field={field} />;
      case "dropdown":
        return <DropDown key={field.id} label={field.question} field={field} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col h-[88vh] w-full md:mt-10">
      <div className="mt-6 flex flex-col w-full md:pr-80">
        {formFields.map((field: FormField) => renderField(field))}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="w-80 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
