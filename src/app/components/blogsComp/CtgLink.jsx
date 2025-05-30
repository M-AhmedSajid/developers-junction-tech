"use client";
import { useLoaderContext } from "@/app/context/loaderContext";
import Link from "next/link";
import React from "react";

export default function CtgLink({ href, children }) {
  const {setLoader} = useLoaderContext();
  const loading = () => {
    setLoader(true);
  }
  return (
    <Link
      href={href}
      className="tracking-widest uppercase bg-gray-300 hover:bg-primary duration-300 text-xs pb-0.5 pt-1 px-3 title-font font-medium text-black hover:text-white mb-2 mr-2 block"
    >
      <span onClick={loading}>
      {children}
      </span>
    </Link>
  );
}
