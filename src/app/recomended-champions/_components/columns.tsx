"use client";
import { ArrowUpDown } from "lucide-react";
import { Champion } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Champion>[] = [
  {
    accessorKey: "championname",
    header: ({ column }) => {
      return (
        <button
          className="inline-flex max-sm:flex-col max-sm:flex-wrap items-center justify-center gap-1 w-full h-full hover:bg-zinc-700 hover:dark:bg-zinc-950 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown
            className={`w-4 h-4 inline-block align-middle ${
              column.getIsSorted() ? "text-violet-800" : ""
            }`}
          />
        </button>
      );
    },
  },

  {
    accessorKey: "championwinrate",
    header: ({ column }) => {
      return (
        <button
          className="inline-flex max-sm:flex-col max-sm:flex-wrap items-center justify-center gap-1 w-full h-full hover:bg-zinc-700 hover:dark:bg-zinc-950  cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Win rate
          <ArrowUpDown
            className={`w-4 h-4 inline-block align-middle ${
              column.getIsSorted() ? "text-violet-800" : ""
            }`}
          />
        </button>
      );
    },
  },

  {
    accessorKey: "championpickrate",
    header: ({ column }) => {
      return (
        <button
          className="inline-flex max-sm:flex-col max-sm:flex-wrap items-center justify-center gap-1 w-full h-full hover:bg-zinc-700 hover:dark:bg-zinc-950  cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pick rate
          <ArrowUpDown
            className={`w-4 h-4 inline-block align-middle ${
              column.getIsSorted() ? "text-violet-800" : ""
            }`}
          />
        </button>
      );
    },
  },

  {
    accessorKey: "championbanrate",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="inline-flex max-sm:flex-col max-sm:flex-wrap items-center justify-center gap-1 w-full h-full hover:bg-zinc-700 hover:dark:bg-zinc-950  cursor-pointer"
        >
          Ban rate
          <ArrowUpDown
            className={`w-4 h-4 inline-block align-middle ${
              column.getIsSorted() ? "text-violet-800" : ""
            }`}
          />
        </button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="inline-flex max-sm:flex-col max-sm:flex-wrap items-center justify-center gap-1 w-full h-full hover:bg-zinc-700 hover:dark:bg-zinc-950  cursor-pointer"
        >
          Role
          <ArrowUpDown
            className={`w-4 h-4 inline-block align-middle ${
              column.getIsSorted() ? "text-violet-800" : ""
            }`}
          />
        </button>
      );
    },
  },
];
