"use client"
import { useEffect } from 'react'
import { useLoaderContext } from '../context/loaderContext';

export default function LoaduseEffect() {
    const { setLoader } = useLoaderContext();
    useEffect(() => {
        setLoader(false);
      }, [setLoader]);
  return null;
}
