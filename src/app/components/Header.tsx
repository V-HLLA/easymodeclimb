import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-purple-700 bg-white dark:bg-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center sm:justify-between gap-2 max-sm:flex-wrap justify-center">
        <Link
          href="/"
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          EasymodeClimb
        </Link>
        <nav className="sm:ml-auto justify-center items-center gap-2 flex max-sm:flex-wrap sm:flex">
          <Button
            asChild
            className="border text-white shadow-xs dark:bg-input/30 border-input hover:bg-input/50 transition"
          >
            <Link href="/recomended-champions">Recommended Champions</Link>
          </Button>
          <Button
            asChild
            className="border text-white shadow-xs dark:bg-input/30 border-input hover:bg-input/50 transition"
          >
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
