import { createContext, useState } from "react";
``
interface SortingContextProps {
  sorting: string;
  updateSorting: (sortAlg: string) => void;
}

export const SortingContext = createContext<SortingContextProps | undefined>(undefined);

export const SortingProvider = (props: { children: React.ReactNode }) => {
  const [sorting, setSorting] = useState<string>('Sort');

  const updateSorting = (sortAlg: string) => {
    setSorting(sortAlg);
  }

  const value: SortingContextProps = {
    sorting,
    updateSorting,
  };

  return (
    <SortingContext.Provider value={value}>
      {props.children}
    </SortingContext.Provider>
  );
};
