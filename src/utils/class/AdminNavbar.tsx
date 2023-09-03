import type { Student } from "@/context/StudentContext";
import { useStudent } from "@/context/useStudent";

import { RewardDialog } from "@/utils/demo/RewardDialog";

import toast from "react-hot-toast";
import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export const AdminNavbar = () => {
  const { students, updateStudent } = useStudent();

  const [randomStudent, setRandomStudent] = useState<Student | undefined>(
    students[0]
  );

  const handleRandomStudent = () => {
    setRandomStudent(students[Math.floor(Math.random() * students.length)]);
  };

  const handleReset = () => {
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
              This is the admin navbar
            </h4>
            {/* <div className="grid grid-flow-row auto-rows-max text-sm">
              <button
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                disabled
              >
                Timer
              </button>
              <Dialog>
                <DialogTrigger
                  className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                  onClick={() => handleRandomStudent()}
                >
                  Random
                </DialogTrigger>
                {randomStudent !== undefined ? (
                  <RewardDialog student={randomStudent} random={true} />
                ) : (
                  toast.error(
                    "Whoops! Looks like your random student isn't there!"
                  )
                )}
              </Dialog>
              <button
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-neutral-500 disabled:bg-transparent"
                onClick={() => handleReset()}
              >
                Reset Points
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
