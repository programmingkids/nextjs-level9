import Link from "next/link";
import { HiPencil } from "react-icons/hi2";
import { type Author } from "@/prisma-zod/index";

type Props = {
  list: Author[];
};

export const AuthorTable = ({ list }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-left">
        <TableHead />
        <tbody>
          {list.map((e: Author) => (
            <TableRow key={e.id} {...e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className="text-gray-100 bg-emerald-800">
      <tr>
        <th className="p-3">ID</th>
        <th className="p-3">NAME</th>
        <th className="p-3">ACTION</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ id, name }: Author) => {
  return (
    <tr className="odd:bg-white even:bg-emerald-100 border-b">
      <td className="p-3">{id}</td>
      <td className="p-3">{name}</td>
      <td className="p-3 flex justify-start gap-4">
        <Link
          href={`/author/${id}/edit`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <HiPencil />
        </Link>
      </td>
    </tr>
  );
};
