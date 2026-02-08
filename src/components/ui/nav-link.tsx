"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/css";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded transition-colors duration-200 text-white",
        {
          "bg-blue-700": isActive,
          "hover:bg-blue-400 active:bg-blue-500": !isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};

export { NavLink };
