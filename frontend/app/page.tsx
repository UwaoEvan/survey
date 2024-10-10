"use client";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useQuery, QueryClient } from "@tanstack/react-query";


export default function Home() {
  const router = useRouter();
  const queryClient = new QueryClient();

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

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="w-full mt-20">
      {data?.map((options: any) => (
        <div className="flex items-center">
          <p className="text-blue-400 my-4" key={options._id}>
            {options?.title}
          </p>
          <div onClick={(e) => handleDelete(options._id)} className="bg-red-400 w-[80px] text-white p-2 ml-4 text-center rounded-sm hover:cursor-pointer">
            Delete
          </div>
        </div>
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
