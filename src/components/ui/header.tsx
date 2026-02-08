import { NavLink } from "./nav-link";

const Header = () => {
  return (
    <div className="flex items-center gap-6 px-8 py-4 text-xl font-semibold text-black dark:text-zinc-50">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
    </div>
  );
};

export { Header };
