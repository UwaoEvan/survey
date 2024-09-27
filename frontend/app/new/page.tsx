"use client";
import FormBuilder from "@/components/formbuilder";
import SideBar from "@/components/sidebar";

export default function Page() {
  return (
    <div className="relative flex flex-col md:flex-row w-full">
      <SideBar />
      <FormBuilder />
    </div>
  );
}
