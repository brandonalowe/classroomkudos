import type { Student } from "../context/StudentContext";
import tempImg from "../../public/eggs/egg0.png";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RewardDialog } from "./RewardDialog";

export const StudentBlock = (props: {
  student: Student;
}) => {
  const { student } = props;


  return (
    <>
      <Dialog>
        <DialogTrigger className="b-0 relative mx-5 mb-3 mt-14 h-20 w-28 items-center rounded-md bg-zinc-900 p-0 text-base shadow-sm hover:bg-zinc-600 hover:border-2 hover:border-zinc-300">
          {/* Changing the colour of the text based on points */}
          <div className="-mt-20">
            <div className="relative mx-auto flex h-full w-full justify-center">
              <Image
                src={tempImg}
                alt="student image"
                height={80}
                width={70}
                className="text-center"
                priority
              />
            </div>
          </div>
          <div className="-mb-2 box-border pl-[5px] pr-[3px]">
            <motion.span className="flex-wrap text-base">
              {student.name}
            </motion.span>
            <div className="flex justify-between gap-5 text-white">
              {student.points === 0 ? (
                <></>
              ) : (
                <div className="absolute left-full top-0 flex -translate-x-1/2 -translate-y-4 flex-col gap-1">
                  {student.points > 0 ? (
                    <span className="inline-block min-h-[2.5rem] min-w-[2.5rem] rounded-full border-2 border-solid border-white bg-green-700 p-1 text-center text-lg font-bold shadow-sm">
                      {student.points}
                    </span>
                  ) : (
                    <span className="inline-block min-h-[2.5rem] min-w-[2.5rem] rounded-full border-2 border-solid border-white bg-red-700 p-1 text-center text-lg font-bold shadow-sm">
                      {student.points}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogTrigger>
        <RewardDialog student={student} random={false} />
      </Dialog>
    </>
  );
};
