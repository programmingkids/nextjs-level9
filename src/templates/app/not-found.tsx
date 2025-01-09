import { type Metadata } from "next";
import { MdOutlineWarning } from "react-icons/md";
import { ButtonLink } from "@/components/ui/elements/button";

export const metadata: Metadata = {
  title: "NotFound",
};

export default function NotFound() {
  return (
    <div className="main">
      <h1 className="p-4 bg-red-500 text-white text-2xl">
        <MdOutlineWarning className="inline align-bottom mr-2 text-2xl" />
        Not Found
      </h1>
      <div className="p-4">ページが存在しません</div>
      <div className="p-4">URLを確認のうえ、再度アクセスしてください</div>
      <div className="p-4">
        <ButtonLink href="/" text="HOME" color="blue" />
      </div>
    </div>
  );
}
