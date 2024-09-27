import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { RootState } from "@/store";
import { FormField, OptionsAnswerType } from "@/types/form";
import { UPDATE_ANSWER_OPTION } from "@/store/actions";

type RadioButtonProps = {
  label: string;
  field: FormField;
}

export default function RadioButton(props: RadioButtonProps) {
  const { label, field } = props;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { showPreview } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const [options, setOptions] = useState(
    field?.providedAnswersOptions || [
      {
        id: 1,
        optionLabel: "Option 1",
        value: "Option 1",
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
      {showPreview && (
        <label className="text-2xl font-semibold text-gray-900">{`${field.id}: ${label}`}</label>
      )}
      <fieldset className="mt-2">
        <legend className="sr-only">{label}</legend>

        {!showPreview ? (
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <div className="mt-1 flex h-6 flex-1 items-center">
                  <input
                    type="radio"
                    id={option.optionLabel}
                    name={option.optionLabel}
                    value={option.value}
                    onChange={(e) => handleChange(e.target.value, option.id)}
                    disabled
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
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
            {addNewRadioOptions(handleAddOption)}
          </div>
        ) : (
          OptionRenderer(options)
        )}
      </fieldset>
    </div>
  );
}

function addNewRadioOptions(handleAddOption: () => void) {
  return (
    <button
      key="add-option"
      className="flex w-full items-center "
      onClick={handleAddOption}
    >
      <input
        type="radio"
        id="add-new-option"
        name="add-new-option"
        disabled
        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
      />
      <label
        htmlFor="add-new-option"
        className="ml-4 block text-sm font-medium leading-6 text-gray-900"
      >
        Add Option
      </label>
    </button>
  );
}

const OptionRenderer = (options: OptionsAnswerType[]) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="mb-2">
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            checked={selectedOption === option.value}
            id={option.value}
            name={option.value}
            value={option.value}
            onChange={(e) => setSelectedOption(e.target.value)}
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
