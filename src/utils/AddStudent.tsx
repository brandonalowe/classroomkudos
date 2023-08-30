import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { useStudent } from "@/context/useStudent";
import { Input } from "@/components/ui/input";

export const AddStudent = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

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
      <div className="m-auto flex w-full max-w-lg items-center gap-2 p-5">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="rounded-xl border-2 border-blue-900 bg-blue-900 px-5 py-2 text-sm font-normal text-blue-300 active:scale-95"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
