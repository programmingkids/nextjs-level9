import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { getAuthors } from "@/db/author";
import { getBookById } from "@/db/book";
import { BookEditForm } from "@/components/book/edtForm";

type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "Book Edit",
};

export default async function Page({ params: { id } }: Props) {
  // 型変換
  const bookId = parseInt(id as string, 10);
  // 編集対象のデータを取得
  const result = await getBookById(bookId);
  if (!result.success) {
    // 存在しない場合、NotFoundにする
    notFound();
  }
  const authors = await getAuthors();

  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <HiMiniAcademicCap className="inline align-bottom mr-2 text-2xl" />
        Author Edit
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <BookEditForm
            {...{
              defaultValues: result.data,
              authors,
            }}
          />
        </div>
      </div>
    </div>
  );
}
