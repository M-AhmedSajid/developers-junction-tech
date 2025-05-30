import Button from "@/app/components/Button";
import LoaduseEffect from "@/app/utils/LoaduseEffect";
import {
  BookOpenIcon,
  CloudArrowUpIcon,
  DeviceTabletIcon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "E-Books Services | Developers Junction Tech",
  description:
    "Create and publish professional E-Books with Developers Junction Tech. We provide end-to-end services, from design and formatting to distribution, ensuring your content shines and reaches a wider audience.",
};

export default function Example() {
  return (
    <div className="bg-white py-10">
      <LoaduseEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Words That Engage, Stories That Inspire
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            E-Books
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Developers Junction Tech, we offer comprehensive eBook creation
            and publishing services to help authors, businesses, and educators
            bring their ideas to life in the digital world. Whether you&apos;re
            looking to publish a novel, a business guide, or educational
            content, we provide end-to-end solutions, including professional
            design, formatting, and distribution. Our services ensure your eBook
            looks great on all devices—whether it&apos;s a Kindle, tablet, or
            smartphone.
          </p>
        </div>
        <div className="mt-5 flex justify-center flex-wrap">
          <div class="text-gray-600 body-font">
            <div class="container pt-10 md:px-5 md:pt-20 mx-auto">
              <div class="text-center mb-10">
                <h3 class="sm:text-3xl text-2xl font-semibold text-center title-font text-gray-900">
                  Our E-Books Services Include
                </h3>
              </div>
              <div class="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {features.map((feature, i) => (
                  <div class="p-3 sm:w-1/2 w-full" key={i}>
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center duration-300 hover:scale-105 hover:bg-primary hover:text-white group">
                      <feature.icon className="text-primary group-hover:text-white duration-300 w-6 h-6 flex-shrink-0 mr-4" />
                      <span class="title-font">
                        <strong>{feature.name}:</strong> {feature.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center sm:px-40">
                Let us help you turn your manuscript or content into a
                professionally designed eBook that engages readers and stands
                out in the digital marketplace
              </p>
            </div>
          </div>
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

const features = [
  {
    name: "Custom eBook Design",
    description:
      "Beautifully designed layouts that enhance readability and reflect your brand or content theme.",
    icon: BookOpenIcon,
  },
  {
    name: "Professional Formatting",
    description:
      "Formatting for ePub, Mobi, and PDF to ensure compatibility with all major eBook platforms like Amazon Kindle, Apple Books, and Google Play.",
    icon: DeviceTabletIcon,
  },
  {
    name: "Editing and Proofreading",
    description:
      "Ensure your eBook is polished and error-free with our editing and proofreading services.",
    icon: PencilIcon,
  },
  {
    name: "Cover Design",
    description:
      "Eye-catching eBook covers that grab attention and entice readers to explore your content.",
    icon: PhotoIcon,
  },
  {
    name: "Publishing and Distribution",
    description:
      "Assistance in publishing your eBook on major platforms, along with marketing strategies to boost visibility.",
    icon: CloudArrowUpIcon,
  },
];
