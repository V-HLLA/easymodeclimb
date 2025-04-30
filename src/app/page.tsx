import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center gap-3">
      <h1 className="text-6xl max-sm:text-4xl font-extrabold tracking-tight max-w-3xl dark:text-white flex wrap-anywhere items-center drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(89,22,139,0.6)] ">
        EasymodeClimb
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-zinc-800 dark:text-white">
        Tired of always looking for a champion to pick for easy LP?
        <br />
        <strong>Find the easiest League of Legends champions</strong>
        <br />
        to climb ranked — no mechanics required.
      </p>

      <p className="text-md text-muted-foreground">
        Just choose a high win rate easy champion, play, and climb up that
        ladder!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* <Button asChild>
          <Link href="/recomended-champions">Explore Champions</Link>
        </Button> */}

        <Button
          asChild
          className="text-white transition-transform-[background-postion] duration-500 ease-in-out
    hover:scale-105
    bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800
    bg-[length:200%_200%] bg-[position:0_0]
    hover:bg-[position:100%_0]
    "
        >
          <Link href="/recomended-champions">Easy Champions Leaderboard</Link>
        </Button>
      </div>
    </main>
  );
}
