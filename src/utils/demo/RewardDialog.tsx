import type { Student } from "@/context/StudentContext";
import { useStudent } from "@/context/useStudent";
import { useReward } from "@/context/useReward";

import tempImg from "../../../public/eggs/egg0.png";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

import { DialogContent } from "@/components/ui/dialog";
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

export const RewardDialog = (props: { student: Student; random: boolean }) => {
  const { student, random } = props;
  const { rewards } = useReward();

  const [editingStudentName, setEditingStudentName] = useState<string>("");
  const [editingStudentPoints, setEditingStudentPoints] = useState<number>(-69);

  const { deleteStudent, editStudent, updateStudent } = useStudent();

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
    <DialogContent className="sm:max-w-[600px]">
      <Tabs defaultValue="praise" className="mt-4 w-[550px]">
        {!random ? (
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="praise">Praise Points</TabsTrigger>
            <TabsTrigger value="edit">Edit</TabsTrigger>
          </TabsList>
        ) : (
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="praise">Praise Points</TabsTrigger>
          </TabsList>
        )}
        <TabsContent value="praise">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Give Praise Points to {student.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative max-h-[90%] max-w-full space-y-2">
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
                          handleStudentPointUpdate(student._id, reward.weight)
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
        {!random ? (
          <TabsContent value="edit">
            <Card>
              <CardHeader>
                <CardTitle>{student.name}</CardTitle>
                <CardDescription>
                  Change {student.name}&apos;s name, delete {student.name}, or
                  reassign points here.
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
        ) : (
          <></>
        )}
      </Tabs>
    </DialogContent>
  );
};
