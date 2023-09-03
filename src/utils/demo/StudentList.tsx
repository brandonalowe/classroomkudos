import type { Student } from "@/context/StudentContext";
import { useStudent } from "@/context/useStudent";
import { useSorting } from "@/context/useSorting";

import { WholeClassRewardDialog } from "@/utils/demo/WholeClassRewardDialog";
import { StudentBlock } from "@/utils/demo/StudentBlock";

import { SiStarship } from "react-icons/si";
import { motion } from "framer-motion";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export const StudentList = () => {
  const { students } = useStudent();
  const { sorting, searchString } = useSorting();

  const calcPoints = () => {
    let total = 0;
    students.forEach((student) => {
      total = total + student.points;
    });
    return total;
  };

  const sortArray: (sortingType: string) => Student[] = function (sortingType: string): Student[] {
    const sortedStudents = students
    switch(sortingType) {
      case "alpha":
        return  sortedStudents.sort((a: Student, b: Student) =>{
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      case "reverseAlpha":
        return sortedStudents.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
      case "highPoints":
        return sortedStudents.sort((a, b) => {
          return b.points - a.points;
        });
      case "lowPoints":
        return sortedStudents.sort((a, b) => {
          return a.points - b.points;
        });
      default:
        return sortedStudents
    }
  };

  if (!students.length) {
    return (
      <div className="m-auto max-w-lg px-5">
        <h1 className="flex flex-col items-center gap-5 rounded-xl bg-zinc-900 px-5 py-10 text-center text-xl font-bold">
          <SiStarship className="text-5xl" />
          No students, add more!
        </h1>
      </div>
    );
  }

  const totalPoints = calcPoints();

  return (
    <motion.ul className="flex min-h-min w-full origin-top flex-wrap content-center">
      <Dialog>
        <DialogTrigger className="b-0 relative mx-5 mb-3 mt-14 h-20 w-28 items-center rounded-md bg-zinc-900 p-0 text-base shadow-sm hover:border-2 hover:border-zinc-300 hover:bg-zinc-600">
          {/* Changing the colour of the text based on points */}
          <div className="mb-1 box-border px-1 py-0">
            <motion.span className="flex-nowrap text-base">
              Whole Class
            </motion.span>
            <div className="flex justify-between gap-5 text-white">
              {totalPoints === 0 ? (
                <></>
              ) : (
                <div className="absolute left-full top-0 flex -translate-x-1/2 -translate-y-4 flex-col gap-1">
                  {totalPoints > 0 ? (
                    <span className="inline-block min-h-[2.5rem] min-w-[2.5rem] rounded-full border-2 border-solid border-white bg-green-700 p-1 text-center text-lg font-bold shadow-sm">
                      {totalPoints}
                    </span>
                  ) : (
                    <span className="inline-block min-h-[2.5rem] min-w-[2.5rem] rounded-full border-2 border-solid border-white bg-red-700 p-1 text-center text-lg font-bold shadow-sm">
                      {totalPoints}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogTrigger>
        <WholeClassRewardDialog />
      </Dialog>

      {sortArray(sorting).filter((student) => student.name.toLowerCase().includes(searchString.toLowerCase())).map((student) => (
        <StudentBlock student={student} key={student._id} />
      ))}
    </motion.ul>
  );
};
