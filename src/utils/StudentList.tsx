import { useStudent } from "@/context/useStudent";
import { useReward } from "@/context/useReward";
import { StudentBlock } from "./StudentBlock";

import { SiStarship } from "react-icons/si";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as DialogPrimitive from '@radix-ui/react-dialog';

export const StudentList = () => {
  const { students, updateStudent } = useStudent();
  const { rewards } = useReward();

  const calcPoints = () => {
    let total = 0;
    students.forEach((student) => {
      total = total + student.points;
    });
    return total;
  };

  const handleWholeClassPointUpdate = (weight: number) => {
    students.forEach((student) => {
      updateStudent(student._id, weight)
    })
    toast.success("All praise points allocated");

  }

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
        <DialogTrigger className="b-0 relative mx-5 mb-3 mt-14 h-20 w-28 items-center rounded-md bg-zinc-900 p-0 text-base shadow-sm ">
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
        <DialogContent className="sm:max-w-[600px]">
          <Tabs defaultValue="praise" className="mt-4 w-[550px]">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="praise">Praise Points</TabsTrigger>
            </TabsList>
            <TabsContent value="praise">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Give Praise Points to whole class
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative max-h-[90%] max-w-full space-y-2">
                  <div className="flex space-y-1 justify-center">
                    <div className="flex h-full justify-evenly gap-3">
                      {rewards.map((reward) => (
                        <DialogPrimitive.Close key={reward._id}>
                          <button
                            onClick={() =>
                              handleWholeClassPointUpdate(
                                reward.weight
                              )
                            }
                            className="relative flex h-24 w-24 items-end justify-center gap-4 rounded-[24px] bg-neutral-200 px-3 py-4 shadow-sm"
                          >
                            <div>{reward.name}</div>
                          </button>
                        </DialogPrimitive.Close>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {students.map((student) => (
        <StudentBlock student={student} rewards={rewards} key={student._id} />
      ))}
    </motion.ul>
  );
};
