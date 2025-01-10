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
  return <div className="main"></div>;
}
