"use client";
import { RootState } from "@/store";
import { UPDATE_ANSWER_OPTION } from "@/store/actions";
import { FormField, OptionsAnswerType } from "@/types/form";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

type DropdownProps = {
  field: FormField;
  label: string;
}

export default function DropDown(props: DropdownProps) {
  const { field, label } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const { showPreview } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
 
  const [options, setOptions] = useState(
    field?.providedAnswersOptions || [
      {
        id: 1,
        optionLabel: "Dropdown Option 1",
        value: "Dropdown Option 1",
      },
    ],
  );

  const handleAddOption = () => {
    const newOption = {
      id: options.length + 1,
      optionLabel: `Dropdown Option ${options.length + 1}`,
      value: `Dropdown Option ${options.length + 1}`,
    };
    const payload = {
      id: field.id,
      options: [...options, newOption]
    }

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
    setOptions([...options, newOption]);
  };

  const handleRemoveOption = (id: number) => {
    let newOptions = options.filter((option) => option.id !== id);
    setOptions(newOptions);

    const payload = {
      id: field.id,
      options: newOptions
    }

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
  };

  const handleChange = (value: string, id: number) => {
    setSelectedOption(value);
    let newOptions = options.map((option) =>
      option.id === id ? { ...option, value } : option,
    );
    setOptions(newOptions);

    const payload = {
      id: field.id,
      options: newOptions
    }

    dispatch({ type: UPDATE_ANSWER_OPTION, payload });
  };

  return (
    <div>
      {
        showPreview ?
        <label className="text-2xl font-semibold text-gray-900">{`${field.id}: ${label}`}</label>
        :
        <label className="text-base font-semibold text-gray-900">
        Enter dropdown options
      </label>
      }

      <fieldset className="mt-2">
        <legend className="sr-only">{label}</legend>
        {!showPreview ? (
          <div className="space-y-5">
            {options.map((option, index) => (
              <div key={option.id} className="relative flex items-start">
                <div className="flex h-6  flex-1 items-center">
                  {index + 1}.
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
            {addNewCheckboxOptions(handleAddOption, options.length)}
          </div>
        ) : (
          OptionRenderer(options)
        )}
      </fieldset>
    </div>
  );
}

function addNewCheckboxOptions(
  handleAddOption: () => void,
  optionNumber: number,
) {
  return (
    <button
      key="add-option"
      className="flex w-full items-center "
      onClick={handleAddOption}
    >
      {optionNumber + 1}.
      <label
        htmlFor="add-new-option"
        className="ml-4 block text-sm font-medium leading-6 text-gray-900"
      >
        Add Dropdown Option
      </label>
    </button>
  );
}

const OptionRenderer = (options: OptionsAnswerType[]) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="max-w-80 cursor-text rounded border border-gray-300 p-2 mb-2"
    >   
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
