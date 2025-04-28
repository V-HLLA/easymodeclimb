import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./components/Logo";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center gap-3">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl dark:text-white flex items-center drop-shadow-sm  dark:drop-shadow-purple-900 max-sm:flex-wrap max-sm:justify-center">
        <Logo /> EasymodeClimb
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-zinc-800 dark:text-white">
        Tired of sweating for LP?{" "}
        <strong>Find the easiest League of Legends champions</strong> to climb
        ranked — no mechanics required.
      </p>

      <p className="text-md text-muted-foreground">
        Powered by real-time stats, win rates, and ban rates. Just pick, play,
        and climb.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* <Button className="hover:text-white hover:bg-blue-600 transition">
          <Link href="/recomended-champions">Explore Champions</Link>
        </Button> */}

        <Button
          asChild
          className="bg-blue-700 text-white hover:bg-blue-500 transition ease-in-out"
        >
          <Link href="/recomended-champions">Easy Champions Leaderboard</Link>
        </Button>
      </div>
    </main>
  );
}
