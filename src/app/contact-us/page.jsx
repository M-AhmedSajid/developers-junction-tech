import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import LinkComp from "../components/LinkComp";
import LoaduseEffect from "../utils/LoaduseEffect";
import Form from "./Form";

export const metadata = {
  title: "Contact Us | Developers Junction Tech",
  description: "Contact Developers Junction Tech Now! Email: info@devjunctiontech.com"
}

export default function page() {
  return (
    <div className="container isolate bg-white relative">
      <LoaduseEffect />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="pt-24 pb-20 sm:pt-32 lg:py-48 px-6 lg:px-8 relative lg:static">
          <div className="mx-auto lg:mx-0">
            <div
              className="absolute inset-0 left-0 sm:-top-80 -top-40 -z-10 w-full overflow-hidden lg:w-1/2 first-letter:transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8">
            Get in touch with us! Whether you have questions, need support, or want to discuss your project, we&apos;re here to help. Reach out and let&apos;s connect.
            </p>
            <dl className="mt-10 text-base leading-7 space-y-4">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon className="w-6 h-7 text-gray-500" />
                </dt>
                <dd>
                  <LinkComp href="tel:012-345-6789">012-345-6789</LinkComp>
                </dd>
              </div> */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon className="w-6 h-7 text-gray-500" />
                </dt>
                <dd>
                  <LinkComp href="mailto:info@devjunctiontech.com">
                    info@devjunctiontech.com
                  </LinkComp>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
