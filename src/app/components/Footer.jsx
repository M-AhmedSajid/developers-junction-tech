"use client"
import React from "react";
import Link from "next/link";
import { useLoaderContext } from "../context/loaderContext";
import { usePathname } from "next/navigation";
import Image from "next/image";

const fLinks = [
  {
    title: "Services",
    links: [
      { txt: "Development", href: "/services/development" },
      { txt: "Cloud", href: "/services/cloud" },
      { txt: "Graphic Designing", href: "/services/graphic-designing" },
      { txt: "E-Books", href: "/services/e-books" },
      { txt: "Digital Marketing", href: "/services/digital-marketing" },
      // {
      //   txt: "Printing & Packaging",
      //   href: "/services/printing-and-packaging",
      // },
    ],
  },
  {
    title: "Resources",
    links: [
      { txt: "Blogs", href: "/blogs" },
      // { txt: "FAQs", href: "/faqs" },
      { txt: "Privacy Policy", href: "/privacy-policy" },
      // { txt: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { txt: "Home", href: "/" },
      { txt: "Portfolio", href: "/portfolio" },
      { txt: "About Us", href: "/about-us" },
      { txt: "Contact Us", href: "/contact-us" },
    ],
  },
];

const socialLinks = [
  {
    icon: '<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>',
    href: "https://facebook.com",
  },
  {
    icon: '<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>',
    href: "https://twitter.com",
  },
  {
    icon: '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>',
    href: "https://instagram.com",
  },
  {
    icon: '<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg>',
    href: "https://www.linkedin.com/company/devjunctiontech/",
  },
];

export default function Footer() {
  const {setLoader} = useLoaderContext();
  const pathname = usePathname();
  const loading = () => {
    setLoader(true);
  }
  return (
    <footer className="bg-white/75">
      <div className="container px-5 pb-24 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/logo.webp" alt="Logo" width={180} height={51} />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Empower Your Business with Excellence
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {fLinks.map((fLink) => (
            <div className="lg:w-1/3 md:w-1/2 w-full px-4" key={fLink.title}>
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                {fLink.title}
              </h2>
              <nav className="list-none mb-10">
                {fLink.links.map((link) => (
                  <li key={link.txt}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary"
                    >
                      <span onClick={()=>pathname !== link.href && loading()}>
                      {link.txt}
                      </span>
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Developer Junction Tech
            <Link
              href="https://www.spectratechsolutions.org/"
              className="sr-only"
              target="_blank"
            >
              Spectra Tech Solutions
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                target="_blank"
                className="ml-3 text-gray-500 hover:text-primary"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              ></Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
