import type { Student } from "@/context/StudentContext";
import { useStudent } from "@/context/useStudent";
import { useSorting } from "@/context/useSorting";

import { WholeClassRewardDialog } from "@/utils/demo/WholeClassRewardDialog";
import { StudentBlock } from "@/utils/demo/StudentBlock";

import { SiStarship } from "react-icons/si";
import { motion } from "framer-motion";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export const ClassList = () => {
  return (
    <motion.ul className="flex min-h-min w-full origin-top flex-wrap content-center">
      <Dialog>
        <DialogTrigger className="b-0 relative mx-5 mb-3 mt-14 h-20 w-28 items-center rounded-md bg-zinc-900 p-0 text-base shadow-sm hover:border-2 hover:border-zinc-300 hover:bg-zinc-600">
          {/* Changing the colour of the text based on points */}
          <div className="mb-1 box-border px-1 py-0">
            <motion.span className="flex-nowrap text-base">
              Temporary Class
            </motion.span>
            <div className="flex justify-between gap-5 text-white"></div>
          </div>
        </DialogTrigger>
      </Dialog>
    </motion.ul>
  );
};
