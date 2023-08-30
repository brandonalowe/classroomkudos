import { useStudent } from "../context/useStudent";

import toast from "react-hot-toast";

import { ScrollArea } from "@/components/ui/scroll-area";

export const Navbar = () => {
  const { students, updateStudent } = useStudent();

  const handleReset = () => {
    console.log(students)
    students.forEach((student) => {
      updateStudent(student._id, -student.points);
    });
    toast.success("Reset all points");
  };

  return (
    <ScrollArea className="relative h-full overflow-hidden py-6 pl-8 pr-6 lg:py-8">
      <div className="table min-w-full">
        <div className="w-full">
          <div className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold">
              Tools
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              <button
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                disabled
              >
                Timer
              </button>
              <button
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                disabled
              >
                Random
              </button>
              <button
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                onClick={() => handleReset()}
              >
                Reset Points
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
