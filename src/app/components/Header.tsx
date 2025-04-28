import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-full border-b border-purple-700 bg-purple-900 ">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center sm:justify-between gap-2 max-sm:flex-wrap justify-center">
        <Link
          href="/"
          className="text-3xl font-bold text-white flex items-center hover:drop-shadow-sm dark:hover:drop-shadow-purple-700"
        >
          <Logo />
          EasymodeClimb
        </Link>
        <nav className="sm:ml-auto justify-center items-center gap-2 flex max-sm:flex-wrap sm:flex">
          <Button
            asChild
            className="bg-white text-black dark:text-white hover:bg-blue-600 hover:text-white dark:border shadow-xs dark:bg-input/30 border-input dark:hover:bg-input/50 transition ease-in-out"
          >
            <Link href="/recomended-champions">Recommended Champions</Link>
          </Button>
          <Button
            asChild
            className="bg-white text-black dark:text-white hover:bg-blue-600 hover:text-white dark:border shadow-xs dark:bg-input/30 border-input dark:hover:bg-input/50 transition ease-in-out"
          >
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
