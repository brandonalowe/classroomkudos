import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

export const Navbar = () => {
  return (
    <ScrollArea className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8">
      <div className="min-w-full table">
        <div className="w-full">
            <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold">
                    Tools
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                    <a className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500">Timer</a>
                    <a className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500">Random</a>
                    <a className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500">Reset Points</a>

                </div>
            </div>
        </div>
      </div>
    </ScrollArea>
  );
};
