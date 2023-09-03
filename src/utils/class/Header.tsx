import Link from "next/link";
import React, { useRef } from "react";

import { useSorting } from "@/context/useSorting";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchString, updateSorting, updateSearchString } = useSorting();


  return (
    <main className="text-neutral-300">
      <div className="flex-col md:flex">
        <div className="border-b border-violet-300">
          <div className="flex h-16 items-center px-4">
            <div className="flex w-1/4">
              <Link href="/">← Home</Link>
            </div>
            {/* <div className="flex w-1/2 justify-center px-4 text-xl">
              <div className="m-auto flex w-full max-w-lg items-center gap-1 p-1">
                <Input
                  ref={inputRef}
                  value={searchString}
                  onChange={(e) => updateSearchString(e.target.value)}
                  type="text"
                  className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-neutral-300 focus:border-white"
                  placeholder="Search for ..."
                />
              </div>
            </div>
            <div className="flex w-1/4 justify-end">
              <div className="relative mr-0 box-border flex w-full flex-nowrap items-center justify-end place-self-end self-stretch">
                <Select onValueChange={(value) => updateSorting(value)}>
                  <SelectTrigger className="w-1/2 overflow-hidden rounded-xl border-2 border-zinc-600 bg-transparent px-4 py-2 placeholder:text-zinc-500">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="alpha">A-Z</SelectItem>
                      <SelectItem value="reverseAlpha">Z-A</SelectItem>
                      <SelectItem value="highPoints">Highest</SelectItem>
                      <SelectItem value="lowPoints">Lowest</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
