import Button from "@/app/components/Button";
import LoaduseEffect from "@/app/utils/LoaduseEffect";
import {
  PencilSquareIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterIcon,
  PaperClipIcon,
} from "@heroicons/react/24/solid";
import ServicePicItem from "@/app/components/ServicePicItem";

export const metadata = {
  title: "Graphic Designing Services | Developers Junction Tech",
  description: "Developers Junction Tech delivers eye-catching graphic designs, from custom logos to intuitive UI/UX and impactful social media marketing materials. Stand out and engage your audience with innovative visuals."
}

export default function Example() {
  return (
    <div className="bg-white py-10">
      <LoaduseEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Design That Connects
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Graphic Designing Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Graphic design is the art of visual storytelling, where creativity
            meets strategy to bring your brand to life. At Developers Junction
            Tech, we craft stunning visuals that not only captivate your
            audience but also communicate your message clearly and effectively.
            From logos and branding to website design and digital marketing
            materials, our expert designers blend aesthetics with functionality
            to ensure your brand stands out in the crowded digital space. Let us
            turn your vision into compelling visuals that drive engagement and
            inspire action.
          </p>
        </div>
        <div className="mt-5">
          {features.map((feature, i) => (
            <div className="py-4 md:p-4 w-full" key={i}>
              <div className="relative w-full h-full">
                <div className={`flex items-center justify-between flex-wrap rounded-lg h-full bg-gray-100 p-8 duration-300 hover:scale-105 hover:bg-primary hover:text-white group ${feature.dir ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-full md:w-1/2 ${feature.dir ? "md:pr-5" : "md:pl-5"}`}>
                    <div className="flex items-center mb-3">
                      <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-primary group-hover:bg-white flex-shrink-0">
                        <feature.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-white group-hover:text-primary"
                        />
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium group-hover:text-white">
                        {feature.name}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base group-hover:text-white">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-wrap justify-center mt-6 md:mt-0">
                    {feature.pic.map((logo) => (
                      <ServicePicItem {...logo} key={logo.altTxt} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:px-24 lg:py-0">
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop offset="0%" stopColor="#8a2be2" />
                    <stop offset="100%" stopColor="#8a2be2" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="mx-auto text-center lg:flex-auto lg:py-20">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get Quote
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Let&apos;s Connect with our experts! to explore best solutions for your business needs.
                </p>
                <div className="mt-10">
                  <Button href="/contact-us">Get Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.title}>
                <h3 className="flex items-center mb-4 text-lg font-medium">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {faq.title}
                </h3>
                <p className="text-gray-500">{faq.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

import ghost from "../../img/ghost.webp";
import remus from "../../img/remus-daniek.webp";
import sdibametic from "../../img/sdibametic.webp";
import unclaguel from "../../img/unclaguel.webp";

import digilyn from "../../img/digilyn.webp";
import clinic from "../../img/clinic.webp";
import apex from "../../img/apex.webp";
import sail from "../../img/fire-sail.webp";

import smm1 from "../../img/smm1.webp";
import smm2 from "../../img/smm2.webp";
import smm3 from "../../img/smm3.webp";
import smm4 from "../../img/smm4.webp";

import stationary1 from "../../img/stationary1.webp";
import stationary2 from "../../img/stationary2.webp";
import stationary3 from "../../img/stationary3.webp";
import stationary4 from "../../img/stationary4.webp";

const features = [
  {
    name: "Logo Designing",
    description:
      "We create custom logos that define your brand and leave a lasting impression. Our designs are crafted to reflect your vision and resonate with your audience, helping your business stand out. Let us design a logo that tells your brand's story with impact and clarity.",
    icon: PencilSquareIcon,
    dir: true,
    pic: [
      {
        img: ghost,
        altTxt: "Logo 1",
      },
      {
        img: remus,
        altTxt: "Logo 2",
      },
      {
        img: sdibametic,
        altTxt: "Logo 3",
      },
      {
        img: unclaguel,
        altTxt: "Logo 4",
      }
    ],
  },
  {
    name: "UI/UX Designing",
    description:
      "We design intuitive and engaging UI/UX experiences that prioritize user satisfaction. Our focus is on creating seamless, user-friendly interfaces that not only look great but also enhance functionality and drive engagement. Let us bring your vision to life with designs that offer both beauty and ease of use.",
    icon: DevicePhoneMobileIcon,
    dir: false,
    pic: [
      {
        img: digilyn,
        altTxt: "Web Designs 1",
      },
      {
        img: clinic,
        altTxt: "Web Designs 2",
      },
      {
        img: apex,
        altTxt: "Web Designs 3",
      },
      {
        img: sail,
        altTxt: "Web Designs 4",
      },
    ]
  },
  {
    name: "Social Media Marketing Designing",
    description:
      "We specialize in social media marketing designs that elevate your brand’s online presence. From eye-catching post designs to compelling ad creatives, we create engaging content that captures attention and drives results on platforms like LinkedIn, Facebook, Instagram, and Twitter. Let us help you grow your audience with impactful visuals and strategic campaigns.",
    icon: ChatBubbleBottomCenterIcon,
    dir: true,
    pic: [
      {
        img: smm1,
        altTxt: "Social Media Marketing Design 1",
      },
      {
        img: smm2,
        altTxt: "Social Media Marketing Design 2",
      },
      {
        img: smm3,
        altTxt: "Social Media Marketing Design 3",
      },
      {
        img: smm4,
        altTxt: "Social Media Marketing Design 4",
      },
    ],
  },
  {
    name: "Stationary Designing",
    description:
      "We create professional and cohesive stationary designs that enhance your brand identity. From business cards and letterheads to envelopes and notepads, we ensure every piece reflects your brand's style and values. Let us design elegant, custom stationery that leaves a lasting impression with every communication.",
    icon: PaperClipIcon,
    dir: false,
    pic: [
      {
        img: stationary1,
        altTxt: "Stationary 1",
      },
      {
        img: stationary2,
        altTxt: "Stationary 2",
      },
      {
        img: stationary3,
        altTxt: "Stationary 3",
      },
      {
        img: stationary4,
        altTxt: "Stationary 4",
      },
    ],
  },
];

// const faqs = [
//   {
//     title: "Logo Designing",
//     txt: "We create memorable logos that define your brand identity and help your business stand out in the market.",
//   },
//   {
//     title: "UI/UX Designing",
//     txt: "Our UI/UX designs ensure intuitive, user-friendly interfaces that provide seamless experiences for your users.",
//   },
//   {
//     title: "Social Media Marketing Designing",
//     txt: "Eye-catching and creative designs for your social media campaigns that drive engagement and make your brand shine.",
//   },
// ];
