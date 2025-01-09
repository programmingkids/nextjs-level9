import { type Metadata } from "next";
import { MdHome } from "react-icons/md";
import { MdNote } from "react-icons/md";
import { ButtonLink } from "@/components/ui/elements/button";

export const metadata: Metadata = {
  title: "Home | BookApp",
};

export default function Home() {
  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <MdHome className="inline align-bottom mr-2 text-2xl" />
        Home
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-4 mx-4">
        <div className="max-w-md">
          <div className="flex flex-col h-full rounded-lg border border-gray-800 bg-gray-200 text-glay-800 p-8">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <MdNote />
              </div>
              <h2 className="text-lg font-medium">著者</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-left mb-4">
                著者を紹介します。著者の一覧、新規登録、更新を行います
              </p>
              <ButtonLink href="/author" color="blue" text="一覧" />
            </div>
          </div>
        </div>
        <div className="max-w-md">
          <div className="flex flex-col h-full rounded-lg border border-gray-800 bg-gray-200 text-gray-800 p-8">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <MdNote />
              </div>
              <h2 className="text-lg font-medium">書籍</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-left mb-4">
                書籍を紹介します。書籍の一覧、新規登録、更新を行います
              </p>
              <ButtonLink href="/book" color="blue" text="一覧" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
