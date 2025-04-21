import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
        🧠 EasymodeClimb
      </h1>
      <p className="mt-4 text-lg sm:text-xl max-w-2xl text-muted-foreground">
        Tired of sweating for LP?{" "}
        <strong>Find the easiest League of Legends champions</strong> to climb
        ranked — no mechanics required.
      </p>

      <p className="mt-2 text-md text-muted-foreground">
        Powered by real-time stats, win rates, and ban rates. Just pick, play,
        and climb.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/recomended-champions"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-300 dark:hover:text-blue-400 transition
          underline font-bold back"
        >
          <Button className="hover:text-white hover:bg-blue-600 transition">
            Explore Champions
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button className="hover:text-white hover:bg-blue-600 transition">
            View Easy Champs Leaderboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
