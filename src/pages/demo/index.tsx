import { Toaster } from "react-hot-toast";

import { Header } from "@/utils/Header";
import { Navbar } from "@/utils/Navbar";
import { StudentList } from "@/utils/StudentList";
import { AddStudent } from "@/utils/AddStudent";


export default function StudentDetail() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Header />
      {/* <Navbar /> */}
      <StudentList />
      <AddStudent />
    </>
  );
}
