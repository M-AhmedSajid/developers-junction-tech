import {
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  CloudIcon,
  ChartBarIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Development",
    description:
      "Build responsive and scalable websites tailored to your needs.",
    link: "/services/development",
    icon: ComputerDesktopIcon,
    direction: "flip-right",
  },
  {
    title: "Cloud",
    description:
      "Build responsive and scalable websites tailored to your needs.",
    link: "/services/cloud",
    icon: CloudIcon,
    direction: "flip-left",
  },
  {
    title: "Graphic Designing",
    description: "We have the ability to produce graphics.",
    link: "/services/graphic-designing",
    icon: PuzzlePieceIcon,
    direction: "flip-right",
  },
  {
    title: "E-Books",
    description:
      "We offer excellent E-Books services that will enhance and transform your material.",
    link: "/services/e-books",
    icon: BookOpenIcon,
    direction: "flip-left",
  },
  {
    title: "Digital Marketing",
    description: "Expert digital marketing services to grow your online presence and drive engagement through SEO and social media.",
    link: "/services/digital-marketing",
    icon: ChartBarIcon,
    direction: "flip-right",
  },
  // {
  //   title: "Printing & Packaging",
  //   description: "We are capable content creators.",
  //   link: "/services/printing-and-ackaging",
  //   icon: PrinterIcon,
  //   direction: "flip-left",
  // },
];

const ServicesSection = () => {
  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-24 mx-auto text-center">
        <h2
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-8"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        {services.map((service, i) => {
          const Icon = service.icon;
          const isLast = i === services.length - 1;
          return (
            <div
              className="hover:scale-105 duration-300 group lg:w-3/5 mx-auto"
              key={i}
            >
              <div
                className={`flex items-center ${
                  !isLast ? "border-b border-gray-200" : ""
                } pb-10 mb-10 group-odd:sm:flex-row group-even:sm:flex-row-reverse flex-col`}
                data-aos={service.direction}
              >
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-primary/15 text-primary duration-300 hover:bg-primary hover:text-white flex-shrink-0">
                  <Icon className="sm:w-16 sm:h-16 w-10 h-10" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="btn-sec mt-3 text-primary inline-flex items-center hover:text-hover"
                  >
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <Link href="/contact-us" className="btn-primary">
          Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
