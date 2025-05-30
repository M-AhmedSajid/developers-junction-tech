"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

export default function PortfolioItem({ img, altTxt }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="lg:w-1/4 sm:w-1/2 w-full aspect-square p-4 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden group- hover:scale-105 duration-300">
          <Image
            alt={altTxt}
            className="w-full h-full object-cover object-top group-hover:object-bottom duration-[2s]"
            src={img}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg p-12">
            <Image
              alt={altTxt}
              className="w-full h-full object-contain"
              src={img}
              fill
              sizes="100vw"
            />
            <div
              className="absolute right-3 top-3 p-1 rounded-full bg-red-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-7 h-7 text-white" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
