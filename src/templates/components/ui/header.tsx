import Link from "next/link";
import { MdMenuBook } from "react-icons/md";

export const Header = function () {
  return (
    <header className="sticky top-0 min-h-14 bg-emerald-100 grid place-items-center grid-cols-3 gap-4 px-5 text-slate-700 z-10">
      <div className="justify-self-start">
        <Link href="/">
          <MdMenuBook className="inline align-bottom mr-2 text-2xl" />
        </Link>
      </div>
      <div className="justify-self-center">
        <Link href="/">BookApp</Link>
      </div>
      <div className="justify-self-end"></div>
    </header>
  );
};
