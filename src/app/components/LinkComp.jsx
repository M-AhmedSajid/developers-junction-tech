"use client";
import React from "react";
import Link from "next/link";
import { useLoaderContext } from "../context/loaderContext";

export default function LinkComp({ href, redirect = false, children }) {
  const {setLoader} = useLoaderContext();
  const loading = () => {
    setLoader(true);
  }
  return (
    <Link href={href} className="btn-sec">
      <span onClick={redirect ? loading : undefined}>
      {children}
      </span>
    </Link>
  );
}
