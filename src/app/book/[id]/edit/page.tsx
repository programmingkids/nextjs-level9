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
  return <div className="main"></div>;
}
