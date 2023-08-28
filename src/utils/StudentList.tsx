import { useStudent } from "@/context/useStudent";
import { useReward } from "@/context/useReward";
import { StudentBlock } from "./StudentBlock";

import { SiStarship } from "react-icons/si";
import { motion } from "framer-motion";

export const StudentList = () => {
  const { students } = useStudent();
  const { rewards } = useReward();

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

  return (
    <motion.ul className="flex min-h-min w-full origin-top flex-wrap content-center">
      {students.map((student) => (
        <StudentBlock student={student} rewards={rewards} key={student._id} />
      ))}
    </motion.ul>
  );
};
