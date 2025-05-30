import Button from "@/app/components/Button";
import LoaduseEffect from "@/app/utils/LoaduseEffect";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import ServicePicItem from "@/app/components/ServicePicItem";

export const metadata = {
  title: "Development Services | Developers Junction Tech",
  description:
    "Developers Junction Tech offers expert Web Development, Mobile App Development, and Ecommerce Solutions. Elevate your online presence with responsive designs, secure platforms, and custom features to boost engagement and conversions.",
};

export default function Example() {
  return (
    <div className="bg-white py-10">
      <LoaduseEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Code That Transforms
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Development Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We leverage the latest technology to create powerful development
            solutions that drive business growth. From responsive web
            development to dynamic mobile apps and enterprise-level software,
            our team uses cutting-edge tools to deliver performance-driven
            results. We focus on SEO-friendly designs to boost your online
            visibility and ensure your digital presence ranks higher in search
            engines. Our custom development services are tailored to meet your
            business needs, enhancing user experience and scalability, so your
            business can thrive in the digital landscape. Let us help you
            transform your business with innovative technological solutions.
          </p>
        </div>
        <div className="mt-5 flex justify-center flex-wrap">
          {features.map((feature, i) => (
            <div className="py-4 md:p-4 w-full md:w-1/2" key={i}>
              <div className="relative w-full h-full">
                <div className="rounded-lg h-full bg-gray-100 p-8 duration-300 hover:scale-[1.02] hover:bg-primary hover:text-white group justify-between flex flex-col">
                  <div>
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
                  <div className="flex flex-wrap justify-center mt-6">
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
                Let&apos;s Connect with our experts! to explore best solutions
                for your business needs.
              </p>
              <div className="mt-10">
                <Button href="/contact-us">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import hoopla from "../../img/hoopla.webp";
import promo from "../../img/promo.webp";
import clinic from "../../img/clinic.webp";
import sail from "../../img/fire-sail.webp";

import pickles from "../../img/pickles.webp";
import station from "../../img/station.webp";
import lookupafter from "../../img/lookupafter.webp";
import karoof from "../../img/karoof.webp";

import asian from "../../img/asian-wok.webp";
import kg from "../../img/kg.webp";
import talent from "../../img/local-talent.webp";
import organic from "../../img/organic.webp";

const features = [
  {
    name: "Web Solutions",
    description:
      "At Developers Junction Tech, we specialize in building robust web applications using the latest technologies to power your business. Our development stack includes cutting-edge frameworks like React and Angular for front-end development, Node.js, and Laravel for back-end solutions. These technologies enable us to create fast, scalable, and secure web applications that are fully responsive and SEO-optimized, ensuring seamless user experiences across all devices. Whether you're looking to streamline business operations, enhance customer engagement, or boost online sales, our custom web application solutions are designed to meet your specific needs and drive business growth",
    icon: GlobeAltIcon,
    pic: [
      {
        img: hoopla,
        altTxt: "Web Designs 1",
      },
      {
        img: clinic,
        altTxt: "Web Designs 2",
      },
      {
        img: promo,
        altTxt: "Web Designs 3",
      },
      {
        img: sail,
        altTxt: "Web Designs 4",
      },
    ],
  },
  {
    name: "Mobile Solutions",
    description:
      "Our Dynamic Team design and develop custom mobile applications that offer seamless user experiences on both iOS and Android platforms. Utilizing the latest technologies like React Native, Flutter, and Swift, we build mobile apps that are fast, secure, and scalable. Our focus is on creating intuitive user interfaces combined with robust back-end functionality, ensuring that your app meets your business needs and enhances customer engagement. Whether it's an e-commerce solution, a business tool, or a social platform, our mobile applications are optimized for performance and SEO to help your app rank well in app stores and reach a wider audience. Let us bring your mobile vision to life with innovative and user-focused solutions.",
    icon: DevicePhoneMobileIcon,
    pic: [
      {
        img: pickles,
        altTxt: "Mobile App 1",
      },
      {
        img: station,
        altTxt: "Mobile App 2",
      },
      {
        img: lookupafter,
        altTxt: "Mobile App 3",
      },
      {
        img: karoof,
        altTxt: "Mobile App 4",
      },
    ],
  },
  {
    name: "E-commerce Solutions",
    description:
      "Our Experts offer comprehensive e-commerce solutions using platforms like WordPress (with WooCommerce), Shopify, and Magento to power your online business. Our team creates custom, user-friendly e-commerce websites that feature secure payment gateways, mobile-responsive designs, and intuitive product management systems. We optimize each site for SEO, ensuring better search engine rankings and increased visibility. Whether you're building a new online store or enhancing an existing one, our e-commerce solutions are designed to drive traffic, improve conversions, and grow your business effectively",
    icon: ShoppingCartIcon,
    pic: [
      {
        img: asian,
        altTxt: "Ecommerce 1",
      },
      {
        img: kg,
        altTxt: "Ecommerce 2",
      },
      {
        img: talent,
        altTxt: "Ecommerce 3",
      },
      {
        img: organic,
        altTxt: "Ecommerce 4",
      },
    ],
  },
];
