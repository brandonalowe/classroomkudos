import { useStudent } from "@/context/useStudent";
import { useReward } from "@/context/useReward";

import toast from "react-hot-toast";

import { DialogContent } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import * as DialogPrimitive from "@radix-ui/react-dialog";

export const WholeClassRewardDialog = () => {
  const { students, updateStudent } = useStudent();
  const { rewards } = useReward();

  const handleWholeClassPointUpdate = (weight: number) => {
    students.forEach((student) => {
      updateStudent(student._id, weight);
    });
    toast.success("All praise points allocated");
  };

  return (
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
              <div className="flex justify-center space-y-1">
                <div className="flex h-full justify-evenly gap-3">
                  {rewards.map((reward) => (
                    <DialogPrimitive.Close key={reward._id}>
                      <button
                        onClick={() =>
                          handleWholeClassPointUpdate(reward.weight)
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
  );
};
