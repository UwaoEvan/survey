"use client";
import clsx from "clsx";
import { FormField } from "@/types/form";
import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "@/store";
import { REMOVE_FIELD, UPDATE_FIELD } from "@/store/actions";
import { TrashIcon } from "@heroicons/react/20/solid";
import FormPreview from "./form-preview";
import Checkbox from "./input-types/checkbox";
import DropDown from "./input-types/dropdown";
import RadioButton from "./input-types/radio-button";

export default function FormBuilder() {
  const { showPreview, formFields } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleRemoveField = (id: Number) => {
    dispatch({ type: REMOVE_FIELD, payload: id })
  }

  const handleChange = (id: Number, name: String, value: string) => {
    const payload = {
      id,
      name,
      value
    }
    dispatch({ type: UPDATE_FIELD, payload })
  }

  return (
    <div>
      {showPreview ? (
        <FormPreview formFields={formFields} />
      ) : (
        <div className="mt-6 flex w-full flex-1 justify-between md:ml-8 md:pl-72">
          <div
            className={clsx(
              formFields.length <= 2 && "h-[88vh]",
              "flex flex-1 flex-col",
            )}
          >
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className="mt-4 flex max-w-[800px] flex-col justify-between p-4"
              >
                <div className="flex items-end justify-between">
                  <div className="mb-1 flex items-end">
                    <h3 className="mr-4 text-lg font-semibold">
                      Question {index + 1}
                    </h3>
                  </div>
                  <button
                    className="flex items-end text-red-500"
                    onClick={() => handleRemoveField(field.id)}
                  >
                    <TrashIcon className="h-4 w-4 self-center" />
                    <span>Delete</span>
                  </button>
                </div>

                <div className="h-full max-w-[900px] flex-1 rounded-lg border border-x bg-white p-4">
                  <textarea
                    name="question"
                    placeholder="Question"
                    className={clsx(
                      !showPreview && "bg-[#F1F3F4]",
                      "my-2 w-full cursor-text rounded border border-gray-300 p-2",
                    )}
                    value={field.question}
                    onChange={(e) => handleChange(field.id, e.target.name, e.target.value)}
                  />
                  {renderField(field)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const renderField = (field: FormField) => {
  switch (field.type) {
    case "radio":
      return <RadioButton key={field.id} label={field.question} field={field} />;
    case "checkbox":
      return <Checkbox key={field.id} label={field.question} field={field} />;
    case "dropdown":
      return <DropDown key={field.id} label={field.question} field={field} />;
    default:
      return null;
  }
};
