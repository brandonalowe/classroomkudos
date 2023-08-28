import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { useStudent } from "@/context/useStudent";
import { Input } from "@/components/ui/input";



//   interface Reward {
//     _id: string;
//     name: string;
//     weight: number;
//     classId: string;
//     influence: number;
//     img: string;
//   }

export const AddStudent = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null)

  const { addStudent } = useStudent();

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trimEnd() !== "") {
      addStudent(input);
      setInput("");
      toast.success("Student added");
    } else {
      toast.error("Input field cannot be empty");
    }
  };

 
  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
