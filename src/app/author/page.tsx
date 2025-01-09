import { type Metadata } from "next";
import Link from "next/link";
import { AuthorTable } from "@/components/author/table";
import { getAuthors } from "@/db/author";
import { MdOutlineAdd } from "react-icons/md";
import { HiMiniAcademicCap } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Author",
};

export default async function Page() {
  // 一覧データを取得
  const list = await getAuthors();

  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <HiMiniAcademicCap className="inline align-bottom mr-2 text-2xl" />
        Author
      </h1>
      <div className="py-4 px-6">
        <AuthorTable {...{ list }} />
      </div>
      <div className="fixed bottom-20 right-10 z-20">
        <Link href="/author/create">
          <div className="inline-flex items-center justify-center w-16 h-16 text-3xl text-gray-100 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-800 cursor-pointer">
            <MdOutlineAdd />
          </div>
        </Link>
      </div>
    </div>
  );
}
