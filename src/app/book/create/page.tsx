import { type Metadata } from "next";
import { IoLibrary } from "react-icons/io5";
import { BookCreateForm } from "@/components/book/createForm";
import { getAuthors } from "@/db/author";

export const metadata: Metadata = {
  title: "Book Create",
};

export default async function Page() {
  return <div className="main"></div>;
}
