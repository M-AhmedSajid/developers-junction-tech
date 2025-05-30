"use client"
import Link from "next/link";
import React from "react";
import { useLoaderContext } from "../context/loaderContext";

export default function Button({href, children}) {
  const {setLoader} = useLoaderContext();
  const loading = () => {
    setLoader(true);
  }
  return (
    <Link href={href} className="btn-primary">
      <span onClick={loading}>
      {children}
      </span>
    </Link>
  );
}
