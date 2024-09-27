"use client";
import { RootState } from "@/store";
import { UPDATE_ANSWER_OPTION } from "@/store/actions";
import { FormField, OptionsAnswerType } from "@/types/form";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

type CheckboxProps = {
  field: FormField;
  label: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { field, label } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const { showPreview } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const [options, setOptions] = useState(
    field?.providedAnswersOptions || [
      {
        id: 1,
        optionLabel: "Checkbox Option 1",
        value: "Checkbox Option 1",
      },
    ],
  );

  const handleAddOption = () => {
    const newOption = {
      id: options.length + 1,
      optionLabel: `Option ${options.length + 1}`,
      value: `Option ${options.length + 1}`,
    };

    const payload = {
      id: field.id,
      options: [...options, newOption],
    };

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
    setOptions([...options, newOption]);
  };

  const handleRemoveOption = (id: number) => {
    let newOptions = options.filter((option) => option.id !== id);

    const payload = {
      id: field.id,
      options: newOptions,
    };

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
    setOptions(newOptions);
  };

  const handleChange = (value: string, id: number) => {
    setSelectedOption(value);
    let newOptions = options.map((option) =>
      option.id === id ? { ...option, value } : option,
    );

    const payload = {
      id: field.id,
      options: newOptions,
    };

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
    setOptions(newOptions);
  };

  return (
    <div>
      {showPreview && (
        <label className="text-2xl font-semibold text-gray-900">{`${field.id}: ${label}`}</label>
      )}

      <fieldset className="mt-2">
        <legend className="sr-only">{label}</legend>
        {!showPreview ? (
          <div className="space-y-5">
            {options.map((option) => (
              <div key={option.id} className="relative flex items-start">
                <div className="flex h-6  flex-1 items-center">
                  <input
                    type="checkbox"
                    id={option.optionLabel}
                    name={option.optionLabel}
                    value={option.value}
                    onChange={(e) => handleChange(e.target.value, option.id)}
                    disabled
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />

                  <input
                    type="text"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={(e) => handleChange(e.target.value, option.id)}
                    className="mx-3 my-2 w-full cursor-text rounded border border-gray-300 p-2"
                  />
                </div>
                <button onClick={() => handleRemoveOption(option.id)}>
                  <XMarkIcon
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
            {addNewCheckboxOptions(handleAddOption)}
          </div>
        ) : (
          OptionRenderer(options)
        )}
      </fieldset>
    </div>
  );
}

function addNewCheckboxOptions(handleAddOption: () => void) {
  return (
    <button
      key="add-option"
      className="flex w-full items-center "
      onClick={handleAddOption}
    >
      <input
        type="checkbox"
        id="add-new-option"
        name="add-new-option"
        disabled
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor="add-new-option"
        className="ml-4 block text-sm font-medium leading-6 text-gray-900"
      >
        Add Checkbox Option
      </label>
    </button>
  );
}

const OptionRenderer = (options: OptionsAnswerType[]) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="mb-2">
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.value)}
            id={option.value}
            name={option.value}
            value={option.value}
            onChange={(e) => handleCheckboxChange(e.target.value)}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor={option.id.toString()}
            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
          >
            {option.value}
          </label>
        </div>
      ))}
    </div>
  );
};
