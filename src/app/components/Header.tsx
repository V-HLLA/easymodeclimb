import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-purple-700 bg-white dark:bg-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          EasymodeClimb
        </Link>
        <nav className="space-x-4">
          <Link
            href="/recomended-champions"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Champions
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
