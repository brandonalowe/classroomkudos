import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export const useStudent = () => {
    const context = useContext(StudentContext);

    if (!context) {
        throw new Error('useStudent must be within a StudentProvider')
    }

    return context
}