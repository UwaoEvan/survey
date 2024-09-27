"use client";
import FormBuilder from "@/components/formbuilder";
import SideBar from "@/components/sidebar";

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <SideBar />
      <FormBuilder />
    </div>
  );
}
