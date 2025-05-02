import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-2">
      <h1 className="font-extrabold text-2xl">Page Found</h1>
      <p>Could not find the requested webpage</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
