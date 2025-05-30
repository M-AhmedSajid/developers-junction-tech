"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useLoaderContext } from "../context/loaderContext";
import Image from "next/image";

const services = [
  { name: "Development", href: "/services/development" },
  { name: "Cloud", href: "/services/cloud" },
  { name: "Graphic Designing", href: "/services/graphic-designing" },
  { name: "E-Books", href: "/services/e-books" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  // { name: "Printing & Packaging", href: "/services/printing-and-packaging" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setLoader } = useLoaderContext();

  const loading = () => {
    setLoader(true);
  };

  return (
    <header
      className="bg-white/75 sticky top-0 z-30 backdrop-blur-md shadow"
      data-aos="slide-down"
      data-aos-duration="500"
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 px-4"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 block">
            <span onClick={() => pathname !== "/" && loading()}>
              <span className="sr-only">Developer Junction Tech</span>
              <Image src="/logo.webp" alt="Logo" width={200} height={52} />
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-9 py-6">
          <Link
            href="/"
            className={`text-sm font-semibold leading-6 px-3 duration-300 hover:bg-hover hover:text-white ${
              pathname === "/" && "bg-primary text-white"
            }`}
          >
            <span onClick={() => pathname !== "/" && loading()}>Home</span>
          </Link>
          <div
            className={`relative inline-flex items-center pl-3 pr-2 gap-x-1 text-sm font-semibold leading-6 focus:outline-none duration-300 hover:bg-hover hover:text-white cursor-pointer group ${
              pathname === "/services" && "bg-primary text-white"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Services
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-gray-900 group-hover:text-white group-hover:-rotate-180 duration-300"
            />
            <div
              className={`absolute top-full left-0 pt-3 z-10 w-max overflow-hidden origin-top-left scale-0 duration-300 shadow-lg ${
                isOpen && "scale-100"
              }`}
            >
              <div className="rounded-lg bg-white ring-1 ring-gray-900/5">
                <div className="p-2">
                  {services.map((item) => (
                    <span
                      onClick={() => pathname !== item.href && loading()}
                      key={item.name}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg text-sm font-semibold leading-6 px-4 py-2 duration-300 hover:bg-hover hover:text-white ${
                          pathname === item.href && "bg-primary text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/portfolio"
            className={`text-sm font-semibold leading-6 px-3 duration-300 hover:bg-hover hover:text-white ${
              pathname === "/portfolio" && "bg-primary text-white"
            }`}
          >
            <span onClick={() => pathname !== "/portfolio" && loading()}>
              Portfolio
            </span>
          </Link>
          <Link
            href="/about-us"
            className={`text-sm font-semibold leading-6 px-3 duration-300 hover:bg-hover hover:text-white ${
              pathname === "/about-us" && "bg-primary text-white"
            }`}
          >
            <span onClick={() => pathname !== "/about-us" && loading()}>
              About Us
            </span>
          </Link>
          <Link
            href="/blogs"
            className={`text-sm font-semibold leading-6 px-3 duration-300 hover:bg-hover hover:text-white ${
              pathname === "/blogs" && "bg-primary text-white"
            }`}
          >
            <span onClick={() => pathname !== "/blogs" && loading()}>
              Blogs
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end py-6">
          <Link href="/contact-us" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span onClick={loading}>
              <Link href="/" className="-m-1.5 p-1.5 block">
                <span className="sr-only">Developer Junction Tech</span>
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
              </Link>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <span
                  onClick={() => {
                    setMobileMenuOpen(false);
                    pathname !== "/" && loading();
                  }}
                >
                  <Link
                    href="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === "/" && "bg-primary text-white"
                    }`}
                  >
                    Home
                  </Link>
                </span>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                      pathname.includes === "/services" &&
                      "bg-primary text-white"
                    }`}
                  >
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 "
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <span
                        key={item.name}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          pathname !== item.href && loading();
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ${
                            pathname === item.href && "bg-primary text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </span>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <span
                  onClick={() => {
                    setMobileMenuOpen(false);
                    pathname !== "/portfolio" && loading();
                  }}
                >
                  <Link
                    href="/portfolio"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === "/portfolio" && "bg-primary text-white"
                    }`}
                  >
                    Portfolio
                  </Link>
                </span>
                <span
                  onClick={() => {
                    setMobileMenuOpen(false);
                    pathname !== "/about-us" && loading();
                  }}
                >
                  <Link
                    href="/about-us"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === "/about-us" && "bg-primary text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </span>
                <span
                  onClick={() => {
                    setMobileMenuOpen(false);
                    pathname !== "/blogs" && loading();
                  }}
                >
                  <Link
                    href="/blogs"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === "/blogs" && "bg-primary text-white"
                    }`}
                  >
                    Blogs
                  </Link>
                </span>
              </div>
              <div className="py-6">
                <Button href="/contact-us">
                  <span
                    onClick={() => {
                      setMobileMenuOpen(false);
                      pathname !== "/contact-us" && loading();
                    }}
                  >
                    Contact Us
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
