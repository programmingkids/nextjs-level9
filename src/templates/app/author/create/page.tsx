import { type Metadata } from "next";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { AuthorCreateForm } from "@/components/author/createForm";

export const metadata: Metadata = {
  title: "Author Create",
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <HiMiniAcademicCap className="inline align-bottom mr-2 text-2xl" />
        Author Create
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <AuthorCreateForm />
        </div>
      </div>
    </div>
  );
}
