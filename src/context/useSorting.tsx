import { useContext } from "react";
import { SortingContext } from "./SortingContext";

export const useSorting = () => {
    const context = useContext(SortingContext);

    if (!context) {
        throw new Error('useSorting must be within a SortingProvider')
    }

    return context
}