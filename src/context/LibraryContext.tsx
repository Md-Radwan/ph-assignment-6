"use client";

import React, { createContext, ReactNode, useState } from "react";

export const LibraryContext = createContext({});


interface ILibraryContext {
  removeFromToday: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

interface ILibraryItem {
  id: number;
}

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [addToToday, setAddToToday] = useState<ILibraryItem[]>([]);
  const [saveForLater, setSaveForLater] = useState<ILibraryItem[]>([]);

  
  const removeFromToday = (id: number) => {
    setAddToToday((prev) => prev.filter((item) => item.id !== id));
  };
  
  const removeFromSaved = (id: number) => {
    setSaveForLater((prev) => prev.filter((item) => item.id !== id));
  };
  // const removeFromToday = (id: number) => {
  //   setAddToToday((prev) => prev.filter((item) => item.id !== id));
  // };
  
  // const removeFromSaved = (id: number) => {
  //   setSaveForLater((prev) => prev.filter((item) => item.id !== id));
  // };
  
  const sharedData = {
    addToToday,
    setAddToToday,
    saveForLater,
    setSaveForLater,
    removeFromToday,
    removeFromSaved,
  };
  return (
    <LibraryContext.Provider value={sharedData}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;

// "use client"

// import React, { createContext, ReactNode, useState } from "react";

// export const LibraryContext = createContext({});

// const LibraryProvider = ({ children }: { children: ReactNode }) => {
//   const [addToToday, setAddToToday] = useState([]);
//   const [saveForLater, setSaveForLater] = useState([]);

//   const sharedData = {
//     addToToday,
//     setAddToToday,
//     saveForLater,
//     setSaveForLater,
//   };

//   return (
//     <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
//   );
// };

// export default LibraryProvider;
