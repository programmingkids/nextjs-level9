import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  text: string;
  color: "blue" | "red" | "green";
};

type BottomNavigationIconLinkType = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

const buttonLinkStye = {
  blue: "rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-700",
  red: "rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-700",
  green: "rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-700",
};

export const ButtonLink = function ({ href, text, color }: ButtonLinkProps) {
  const css = buttonLinkStye[color];
  return (
    <Link className={css} href={href}>
      {text}
    </Link>
  );
};

export const BottomNavIconLink = function ({
  href,
  text,
  icon,
}: BottomNavigationIconLinkType) {
  return (
    <Link href={href}>
      {icon}
      <div className="text-xs -translate-y-0.5">{text}</div>
    </Link>
  );
};
