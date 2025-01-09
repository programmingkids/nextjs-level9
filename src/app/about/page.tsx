import { type Metadata } from "next";
import { MdMenuBook } from "react-icons/md";
import { ButtonLink } from "@/components/ui/elements/button";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-500 text-white text-2xl">
        <MdMenuBook className="inline align-bottom mr-2 text-2xl" />
        About
      </h1>
      <h2 className="p-4 text-xl">書籍管理アプリ</h2>
      <ul className="m-4">
        <li>書籍を管理します</li>
        <li>著者一覧</li>
        <li>書籍一覧</li>
      </ul>
      <div className="p-4">
        <ButtonLink href="/" text="HOME" color="blue" />
      </div>
    </div>
  );
}
