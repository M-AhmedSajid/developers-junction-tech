import {
  BriefcaseIcon,
  CheckCircleIcon,
  FlagIcon,
  LightBulbIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import AboutSection from "../components/About";
import LoaduseEffect from "../utils/LoaduseEffect";
import Image from "next/image";

export const metadata = {
  title: "About Us | Developers Junction Tech",
  description: "We deliver cutting-edge Web and Mobile applications, user-friendly UI/UX designs, and custom solutions. We serve both B2B and B2C clients, offering expertise in Cloud based ERP systems like Microsoft Dynamics 365 and Oracle along with PowerBI services for data-driven insights."
}

export default function page() {
  return (
    <section className="text-gray-600">
      <LoaduseEffect />
      <AboutSection
        txt={`Developers Junction Tech, we deliver cutting-edge <strong class="text-white">Web</strong> and <strong class="text-white">Mobile</strong> applications, user-friendly UI/UX designs, and custom solutions. We serve both B2B and B2C clients, offering expertise in Cloud based ERP systems like <strong class="text-white">Microsoft Dynamics 365</strong> and <strong class="text-white">Oracle</strong> along with <strong class="text-white">PowerBI</strong> services for data-driven insights. <br/> Our additional offerings include digital marketing, logo creation, and engaging ads. We're here to boost your business efficiency and enhance your digital presence with creative and innovative solutions. Connect with us to take your business to the next level!`}
      />
      <div className="container px-5 mx-auto flex flex-wrap my-10 md:mt-20 md:mb-0">
        {about.map((item, i) => (
          <div className="py-4 md:p-4 w-full" key={i}>
            <div className="relative w-full h-full">
              <div
                className={`flex items-center justify-between flex-wrap rounded-lg h-full bg-gray-100 p-8 duration-300 hover:scale-105 hover:bg-primary hover:text-white group ${
                  item.dir ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    item.dir ? "md:pr-5" : "md:pl-5"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-primary group-hover:bg-white flex-shrink-0">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white group-hover:text-primary"
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium group-hover:text-white">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base group-hover:text-white">
                      {item.txt}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap justify-center mt-6 md:mt-0">
                  {item.pics.map((pic) => (
                        <div className="w-full aspect-video" key={i}>
                        <div className="relative w-full h-full bg-gray-300 overflow-hidden">
                          <Image
                            alt={pic.altTxt}
                            className="object-cover"
                            src={pic.img}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import ourJourney from "../img/our-journey.webp";
import ourGoals from "../img/our-goals.webp";
import partners from "../img/partners.webp";
import rangeOffers from "../img/range-offers.webp";
import welcomingFuture from "../img/welcoming-future.webp";

const about = [
  {
    title: "Our Journey",
    txt: "Our journey began with a passion for innovation and a mission to help businesses thrive in the digital age. From humble beginnings to becoming a trusted partner for clients worldwide, we've grown by delivering creative solutions, cutting-edge technology, and results-driven strategies. Our commitment to excellence drives us forward as we continue to evolve, helping businesses unlock their full potential every step of the way.",
    icon: MapIcon,
    dir: true,
    pics: [
      {
        img: ourJourney,
        altTxt: "Alt"
      }
    ]
  },
  {
    title: "Our Goals and Principles",
    txt: "Our goals are simple: to deliver exceptional solutions that drive success for our clients. We strive to innovate, grow, and continuously improve, while building lasting partnerships. Our principles are rooted in integrity, transparency, and customer satisfaction. We believe in providing value through creative problem-solving, collaboration, and a commitment to excellence, ensuring that we meet and exceed the expectations of our clients.",
    icon: FlagIcon,
    dir: false,
    pics: [
      {
        img: ourGoals,
        altTxt: "Alt"
      }
    ]
  },
  {
    title: "Trusted Partner",
    txt: "We pride ourselves on being trusted partners to our clients. We build long-lasting relationships by consistently delivering reliable, high-quality solutions tailored to their needs. Our focus is on collaboration, transparency, and unwavering support, ensuring that we not only meet but exceed expectations. With Your Company, you gain a partner dedicated to your success every step of the way. M.R Carton Care. BI Tech. Far Eastern Tech. Sadaf Garments.",
    icon: CheckCircleIcon,
    dir: true,
    pics: [
      {
        img: partners,
        altTxt: "Alt"
      }
    ]
  },
  {
    title: "Range Offers",
    txt: "At Developers Junction Tech, we offer a wide range of services to meet your business needs. From web development and mobile app design to digital marketing, SEO, graphic design and E-books, our solutions are designed to help you grow and succeed in the digital world. Whether you need a simple website, a fully integrated e-commerce platform, or advanced branding and marketing strategies, we have the expertise to deliver. Whatever your project, we provide customized, scalable solutions that fit your goals and budget.",
    icon: BriefcaseIcon,
    dir: false,
    pics: [
      {
        img: rangeOffers,
        altTxt: "Alt"
      }
    ]
  },
  {
    title: "Welcoming Future",
    txt: "We are excited to welcome the future with innovation and vision. As technology evolves, so do we—embracing new ideas, tools, and strategies to help our clients stay ahead in the ever-changing digital landscape. Our commitment to growth, creativity, and forward-thinking solutions ensures that we are always ready to meet the challenges of tomorrow. Together, let's shape a future full of opportunities and success.",
    icon: LightBulbIcon,
    dir: true,
    pics: [
      {
        img: welcomingFuture,
        altTxt: "Alt"
      }
    ]
  },
];
