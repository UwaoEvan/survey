"use client";
import { FormContext } from "@/context/form-context";
import { inputTypeValues } from "@/lib/utils";

import { useContext } from "react";

export default function SideBar() {
  const { formFields, handleNewFieldSelect, showPreview } =
    useContext(FormContext);

  return (
    <>
      {!showPreview ? (
        <div className="hidden md:fixed md:left-0 md:z-40 md:flex md:h-full md:w-96 md:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-4 pt-12">
            <div className="ml-4 flex w-80 flex-col rounded-lg border bg-white p-4">
              <h3 className="text-lg font-semibold">Add Question</h3>

              {inputTypeValues.map((inputType) => (
                <button
                  key={inputType.name}
                  onClick={() =>
                    handleNewFieldSelect(formFields.length + 1, inputType.name)
                  }
                  className="mt-2 rounded bg-blue-500 px-4 py-2 text-left font-bold text-white hover:bg-blue-700"
                >
                  {inputType.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
