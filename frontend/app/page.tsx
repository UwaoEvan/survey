"use client";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full mt-20">
      <p className="text-ms text-center">No surveys found</p>
      <div className="w-full justify-center flex mt-3">
        <button
          onClick={() => router.push("/new")}
          className="ml-3 inline-flex items-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          <PlusCircleIcon className="w-9 mr-1" />
          <p>Create survey</p>
        </button>
      </div>
    </div>
  );
}
