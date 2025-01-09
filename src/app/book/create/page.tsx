import { type Metadata } from "next";
import { IoLibrary } from "react-icons/io5";
import { BookCreateForm } from "@/components/book/createForm";
import { getAuthors } from "@/db/author";

export const metadata: Metadata = {
  title: "Book Create",
};

export default async function Page() {
  // 著者のセレクトボックスの選択肢に利用する
  const authors = await getAuthors();

  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <IoLibrary className="inline align-bottom mr-2 text-2xl" />
        Book Create
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <BookCreateForm {...{ authors }} />
        </div>
      </div>
    </div>
  );
}
