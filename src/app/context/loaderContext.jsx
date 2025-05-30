"use client";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <LoaderContext.Provider value={{ setLoader }}>
      {children}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${
          loader ? "block" : "hidden"
        }`}
      >
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-28 h-28 border-8 text-primary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-primary rounded-full">
            <Image src="/logo.png" alt="Logo of Developers Junction Tech" width={30} height={30} className="animate-ping" />
          </div>
        </div>
      </div>
    </LoaderContext.Provider>
  );
};

// Custom Hook
const useLoaderContext = () => {
  return useContext(LoaderContext);
};

export { LoaderProvider, useLoaderContext };