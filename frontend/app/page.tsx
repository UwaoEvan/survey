"use client";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const router = useRouter();

  const fetchSurveys = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw response;
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const { data } = useQuery({
    queryKey: ["surveys"],
    queryFn: fetchSurveys,
  });

  return (
    <div className="w-full mt-20">
      {data?.map((options: any) => (
        <p className="text-blue-400" key={options._id}>
          {options?.title}
        </p>
      ))}

      {!data && (
        <div>
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
      )}
    </div>
  );
}
