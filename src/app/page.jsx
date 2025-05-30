import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import LoaduseEffect from "./utils/LoaduseEffect";
import Button from "./components/Button";
import LinkComp from "./components/LinkComp";
import Img from "./components/Img";

export default function Example() {
  return (
    <div className="relative">
      <LoaduseEffect />
      <div className="fixed inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-23rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="relative isolate px-6 lg:px-8" data-aos="zoom-in">
        <div className="mx-auto max-w-3xl h-[calc(100dvh_-_85px)] flex justify-center items-center flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Empower Your Business with <br /> Excellence
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact-us">Get started</Button>
              <LinkComp href="#services">
                Learn more <span aria-hidden="true">→</span>
              </LinkComp>
            </div>
          </div>
          <div className="mt-20 overflow-x-hidden w-full md:max-w-3xl">
            <div className="flex items-center whitespace-nowrap animate-[scroll_20s_linear_infinite] space-x-5 overflow-x-hidden w-max">
              {techs.map((tech) => (
                <Img {...tech} key={tech.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <AboutSection txt='We serve both B2B and B2C clients, offering expertise in <strong className="text-white">Web</strong> and <strong className="text-white">Mobile</strong> Solutions, Cloud based ERP systems like <strong className="text-white">Microsoft Dynamics 365</strong> and <strong className="text-white">Oracle</strong> along with <strong className="text-white">PowerBI</strong> services for data-driven insights.' />
      <ServicesSection />
      <Pricing />
      <CTA />
    </div>
  );
}

import php from "./img/php.webp";
import reactNative from "./img/react-native.webp";
import nodejs from "./img/nodejs.webp";
import reactjs from "./img/reactjs.webp";
import microsoftDynamics365 from "./img/microsoft-dynamics-365.webp";
import oracle from "./img/oracle.webp";
import shopify from "./img/shopify.webp";
import wordpress from "./img/wordpress.webp";

const techs = [
  {
    img: php,
    alt: "PHP",
  },
  {
    img: reactNative,
    alt: "React Native",
  },
  {
    img: nodejs,
    alt: "Node JS",
  },
  {
    img: reactjs,
    alt: "React JS",
  },
  {
    img: microsoftDynamics365,
    alt: "Microsoft Dynamics 365",
  },
  {
    img: oracle,
    alt: "Oracle",
  },
  {
    img: shopify,
    alt: "Shopify",
  },
  {
    img: wordpress,
    alt: "Wordpress",
  },
  {
    img: php,
    alt: "PHP",
  },
  {
    img: reactNative,
    alt: "React Native",
  },
  {
    img: nodejs,
    alt: "Node JS",
  },
  {
    img: reactjs,
    alt: "React JS",
  },
  {
    img: microsoftDynamics365,
    alt: "Microsoft Dynamics 365",
  },
  {
    img: oracle,
    alt: "Oracle",
  },
  {
    img: shopify,
    alt: "Shopify",
  },
  {
    img: wordpress,
    alt: "Wordpress",
  },
];
