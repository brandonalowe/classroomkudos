import { createContext, useState } from "react";
import { nanoid } from "nanoid";

interface StudentContextProps {
  students: Student[];
  addStudent: (text: string) => void;
  deleteStudent: (id: string) => void;
  editStudent: (id: string, text: string) => void;
  updateStudent: (id: string, points: number) => void;
}

export interface Student {
  _id: string;
  name: string;
  points: number;
  imgId: number;
  dateCreated: Date;
}

export const StudentContext = createContext<StudentContextProps | undefined>(
  undefined
);

export const StudentProvider = (props: { children: React.ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([
    {
      _id : nanoid(),
      name : "Harley",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },
    {
      _id : nanoid(),
      name : "Isaias",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Aliana",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Conor",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Faith",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Erik",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Hannah",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Dustin",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Ainsley",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Luka",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Raelynn",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Kristopher",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Karina",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Donovan",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Willow",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Yehuda",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Nylah",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Jacoby",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Nevaeh",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },{
      _id : nanoid(),
      name : "Roman",
      points : 0,
      imgId : Math.floor(Math.random() * 8),
      dateCreated : new Date(),
    },
  ]);

  const addStudent = (text: string) => {
    const newStudent: Student = {
      _id: nanoid(),
      name: text,
      points: 0,
      imgId: Math.floor(Math.random() * 8),
      dateCreated: new Date(),
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id: string) => {
    setStudents(prevStudents => prevStudents.filter(students => students._id !== id))
  }

  const editStudent = (id: string, text: string) => {
    setStudents(prevStudents => {
      return prevStudents.map(student => {
        if (student._id === id) {
          return { ...student, name: text }
        }
        return student
      })
    })
  }

  const updateStudent = (id: string, points: number) => {
    setStudents(prevStudents => {
      return prevStudents.map(student => {
        if (student._id === id) {
          return {
            ...student,
            points: student.points + points
          }
        }
        return student
      })
    })
  }

  const value: StudentContextProps = {
    students,
    addStudent,
    deleteStudent,
    editStudent,
    updateStudent
  };

  return (
    <StudentContext.Provider value={value}>
      {props.children}
    </StudentContext.Provider>
  );
};
