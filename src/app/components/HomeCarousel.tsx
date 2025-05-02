import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCarousel() {
  return (
    <Carousel
      className="mx-auto w-full max-w-4xl max-md:max-w-md max-[35rem]:max-w-[70vw] p-1 py-12"
      opts={{ align: "center", loop: true }}
    >
      <CarouselContent className="items-center">
        <CarouselItem className="">
          <section className="flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-7xl max-md:text-4xl max-[35rem]:text-3xl font-extrabold tracking-tight max-w-3xl dark:text-white flex items-center drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(110,17,176,0.8)] ">
              EasymodeClimb
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-zinc-800 dark:text-white">
              Tired of always looking for a champion to pick for easy LP?
              <br />
              <strong>Find the easiest League of Legends champions</strong>
              to climb ranked — no mechanics required.
            </p>

            <p className="text-md text-muted-foreground">
              Just choose a high win rate easy champion, play, and climb up that
              ladder!
            </p>

            <div className="flex flex-col sm:flex-row gap-4" role="button">
              <Button
                asChild
                className="text-white transition-transform-[background-postion] duration-500
                ease-in-out
                hover:scale-105
                bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800
                bg-[length:200%_200%] bg-[position:0_0]
                hover:bg-[position:100%_0]
                max-[365px]:w-44 max-[365px]:text-xs
                "
              >
                <Link href="/recomended-champions">
                  Easy Champions Leaderboard
                </Link>
              </Button>
            </div>
          </section>
        </CarouselItem>
        <CarouselItem>
          <section className="flex flex-col items-center justify-center flex-1 text-center gap-3">
            <header>
              <h2
                className="text-2xl max-[35rem]:text-md font-extrabold tracking-tight 
              drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(110,17,176,0.8)]
              text-zinc-900 dark:text-white"
              >
                Why play easy champions?
              </h2>
            </header>
            <section className="max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                <b>
                  Easy champions allow you to focus on what&apos;s most
                  important
                </b>
                : map awareness, macro play, and decision-making — not complex
                mechanics or flashy combos.
              </p>
              <p>
                They&apos;re{" "}
                <b>perfect for climbing the ranked ladder consistently</b>,
                especially if you want to reduce tilt and focus on fundamentals.
              </p>
              <p>
                They allow you to <b>take breaks</b> from the game{" "}
                <b>without worrying about losing your mechanics.</b>
              </p>
              <p>
                Whether you&apos;re new to the game or just want stress-free LP
                gains, <b>easy champions are a reliable path to victory.</b>
              </p>
            </section>
          </section>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="max-[25rem]:-left-8" />
      <CarouselNext className="max-[25rem]:-right-8" />
    </Carousel>
  );
}
