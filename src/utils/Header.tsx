import Link from "next/link";
import React, { useRef, useState } from "react";

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
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main className="">
      <div className="flex-col md:flex">
        <div className="border-b border-violet-200">
          <div className="flex h-16 items-center px-4">
            <div className="flex w-1/4">
              <Link href="/">← Home</Link>
            </div>
            <div className="flex w-1/2 justify-center px-4 text-xl">
              <div className="m-auto flex w-full max-w-lg items-center gap-1 p-1">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-zinc-500 focus:border-white"
                  placeholder="Search for ..."
                />
              </div>
            </div>
            <div className="flex w-1/4 justify-end">
              <div className="relative mr-0 box-border flex w-full flex-nowrap items-center justify-end place-self-end self-stretch">
                <Select>
                  <SelectTrigger className="w-1/2 rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 placeholder:text-zinc-500">
                    <SelectValue placeholder="Sort by ..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="alpha">A-Z</SelectItem>
                      <SelectItem value="reverseAlpha">Z-A</SelectItem>
                      <SelectItem value="highPoints">Highest</SelectItem>
                      <SelectItem value="lowPoints">Lowest</SelectItem>
                    </SelectGroup>
                    {/* <Select.Separator className={styles.SelectSeparator}>
                        <Select.Group>
                          <SelectItem value="favourites">
                            Favourite Kids
                          </SelectItem>
                        </Select.Group>
                      </Select.Separator> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
