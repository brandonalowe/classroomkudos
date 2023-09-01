import { createContext, useState } from "react";
``
interface SortingContextProps {
  sorting: string;
  searchString: string;
  updateSorting: (sortAlg: string) => void;
  updateSearchString: (searchString: string) => void;
}

export const SortingContext = createContext<SortingContextProps | undefined>(undefined);

export const SortingProvider = (props: { children: React.ReactNode }) => {
  const [sorting, setSorting] = useState<string>('Sort');
  const [searchString, setSearchString] = useState<string>('')

  const updateSorting = (sortAlg: string) => {
    setSorting(sortAlg);
  }

  const updateSearchString = (searchString: string) => {
    setSearchString(searchString);
  }

  const value: SortingContextProps = {
    sorting,
    searchString,
    updateSorting,
    updateSearchString,
  };

  return (
    <SortingContext.Provider value={value}>
      {props.children}
    </SortingContext.Provider>
  );
};