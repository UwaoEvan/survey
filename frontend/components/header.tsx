"use client";
import { RootState } from "@/store";
import { TOGGLE_PREVIEW } from "@/store/actions";
import { useSelector, useDispatch } from "react-redux";

export default function PageHeader() {
  const { showPreview } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const togglePreview = () => {
    dispatch({ type: TOGGLE_PREVIEW, payload: !showPreview });
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white px-4 pb-2 pt-6 sm:px-6 md:fixed md:z-50 md:flex md:items-center  md:justify-between md:pl-8">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        {showPreview ? "Survey preview" : "Create a survey"}
      </h2>
      <div className="mt-4 flex md:mt-0">
        <button
          onClick={togglePreview}
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          {showPreview ? "Back to Editor" : "Preview Form"}
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Publish Survey
        </button>
      </div>
    </div>
  );
}
