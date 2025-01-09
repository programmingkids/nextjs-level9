import { type Metadata } from "next";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { BookTable } from "@/components/book/table";
import { getBooks } from "@/db/book";

export const metadata: Metadata = {
  title: "Book",
};

export default async function Page() {
  // 一覧データを取得
  const list = await getBooks();

  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <IoLibrary className="inline align-bottom mr-2 text-2xl" />
        Book
      </h1>
      <div className="py-4 px-6">
        <BookTable {...{ list }} />
      </div>
      <div className="fixed bottom-20 right-10 z-20">
        <Link href="/book/create">
          <div className="inline-flex items-center justify-center w-16 h-16 text-3xl text-gray-100 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-800 cursor-pointer">
            <MdOutlineAdd />
          </div>
        </Link>
      </div>
    </div>
  );
}
