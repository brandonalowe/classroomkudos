import type { Student } from "../context/StudentContext";
import { useStudent } from "../context/useStudent";
import type { Reward } from "../context/RewardContext";
import { useReward } from "../context/useReward";
import tempImg from "../../public/eggs/egg0.png";

// import { cn } from "@/lib/utils";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import * as DialogPrimitive from "@radix-ui/react-dialog";

export const StudentBlock = (props: {
  student: Student;
  rewards: Reward[];
}) => {
  const { student, rewards } = props;

  const [editingStudentName, setEditingStudentName] = useState<string>("");
  const [editingStudentPoints, setEditingStudentPoints] = useState<number>(-69);

  const { deleteStudent, editStudent, updateStudent } = useStudent();
  //   const { deleteReward, editReward, updateReward } = useReward();

  const handleStudentUpdate = (studentId: string) => {
    if (editingStudentName.trim() !== "" && editingStudentPoints !== -69) {
      editStudent(studentId, editingStudentName);
      updateStudent(studentId, editingStudentPoints);
      setEditingStudentName("");
      setEditingStudentPoints(-69);
      toast.success("Student name and points updated successfully");
    } else if (editingStudentName.trim() !== "") {
      editStudent(studentId, editingStudentName);
      setEditingStudentName("");
      toast.success("Student name updated successfully");
    } else if (editingStudentPoints !== -69) {
      updateStudent(studentId, editingStudentPoints);
      setEditingStudentPoints(-69);
      toast.success("Student points updated successfully");
    } else {
      toast.error("Student field cannot be empty");
    }
  };

  const handleStudentDelete = (studentId: string) => {
    deleteStudent(studentId);
    toast.success("Student deleted");
  };

  const handleStudentPointUpdate = (studentId: string, points: number) => {
    updateStudent(studentId, points);
    toast.success("Points allocated");
  };

  return (
    <html>
      <div className="pt-20">
        <Dialog>
          <DialogTrigger className="b-0 relative mx-4 mb-3 h-16 w-24 items-center rounded-md bg-zinc-900 p-0 text-base shadow-sm ">
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
            <div className="-mb-2 box-border px-1 py-0">
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

          <DialogContent className="sm:max-w-[600px]">
            <Tabs defaultValue="praise" className="mt-4 w-[550px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="praise">Praise Points</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>
              <TabsContent value="praise">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      Give Praise Points to {student.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative max-h-[90%] max-w-[90%] space-y-2">
                    <div className="flex space-y-1">
                      <div className="min-h-full w-1/3 grow-0">
                        <Image
                          src={tempImg}
                          alt="Student Character"
                          width={125}
                          height={150}
                        />
                      </div>
                      <div className="flex h-full w-2/3 justify-center gap-3">
                        {rewards.map((reward) => (
                          <DialogPrimitive.Close key={reward._id}>
                            <button
                              onClick={() =>
                                handleStudentPointUpdate(
                                  student._id,
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
              <TabsContent value="edit">
                <Card>
                  <CardHeader>
                    <CardTitle>{student.name}</CardTitle>
                    <CardDescription>
                      Change {student.name}&apos;s name, delete {student.name},
                      or reassign points here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current name</Label>
                      <Input
                        id="current"
                        type="text"
                        defaultValue={student.name}
                        onChange={(e) => setEditingStudentName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">Current Points</Label>
                      <Input
                        id="new"
                        type="number"
                        defaultValue={student.points}
                        onChange={(e) =>
                          setEditingStudentPoints(e.target.valueAsNumber)
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <DialogPrimitive.Close>
                      <Button onClick={() => handleStudentUpdate(student._id)}>
                        Save changes
                      </Button>
                    </DialogPrimitive.Close>

                    <DialogPrimitive.Close>
                      <Button
                        className="bg-red-600"
                        onClick={() => handleStudentDelete(student._id)}
                      >
                        Delete Student
                      </Button>
                    </DialogPrimitive.Close>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </html>
  );
};
