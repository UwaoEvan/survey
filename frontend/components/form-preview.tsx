"use client";
import { FormField } from "@/types/form";
import Checkbox from "./input-types/checkbox";
import DropDown from "./input-types/dropdown";
import RadioButton from "./input-types/radio-button";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useState } from "react";

type FormPreviewProps = {
  formFields: FormField[];
};

export default function FormPreview(props: FormPreviewProps) {
  const { formFields } = props;
  const router = useRouter();
  const queryClient = new QueryClient();

  const submitData = async () => {
    try {
      const request = {
        title: "New survey",
        survey: formFields,
      };
      const response = await fetch("http://localhost:4000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw response;
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: submitData,
    onError: (err) => console.log(err),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["surveys"] }),
        router.push("/");
    },
  });

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
    <div className="relative flex flex-col items-center h-[88vh] w-full md:mt-10">
      <div className="mt-6 flex flex-col w-fit md:pr-80">
        {formFields.map((field: FormField) => renderField(field))}
        <div className="mt-6">
          <button
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
            type="button"
            className="w-80 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          >
            {mutation.isPending ? "Please wait" : "Publish survey"}
          </button>
        </div>
      </div>
    </div>
  );
}
