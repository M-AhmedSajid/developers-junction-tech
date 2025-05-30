"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import plansJSON from "./plans.json";

export default function Pricing() {
  const [ctg, setCtg] = useState("Logo Designing");

  // List of plan categories
  const planCtg = [
    "Logo Designing",
    "Video Editing",
    "Content Writing",
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden" id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full" data-aos="fade-up">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Pricing
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
          Transparent and flexible pricing plans to fit your business needs. Get the best value for high-quality services.
          </p>
        </div>
        <TabGroup>
          <TabList className="flex md:justify-center justify-start my-8" data-aos="fade-up">
            <div className="bg-gray-200 rounded-md flex overflow-x-auto md:overflow-x-hidden planCtg">
              {planCtg.map((item) => (
                <Tab
                  key={item} onClick={()=>setCtg(item)}
                  className="first:rounded-s-md last:rounded-e-md px-5 py-2.5 text-sm/6 font-semibold text-gray-600 whitespace-nowrap focus:outline-none data-[selected]:bg-primary data-[selected]:text-white hover:bg-hover hover:text-white duration-300"
                >
                  {item}
                </Tab>
              ))}
            </div>
          </TabList>
          <TabPanels>
            {plansJSON.map((service) => (
              <TabPanel key={service.ctg} className="flex justify-center flex-wrap -m-4">
                {["basic", "pro", "premium"].map((plan) => (
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full" key={plan} data-aos={plan === "basic" ? "zoom-in-right" : plan === "pro" ? "zoom-in" : "zoom-in-left"}>
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden duration-300 hover:scale-105 group">
                      {/* <h4 className="text-sm tracking-widest title-font mb-1 font-medium">
                        {plan.toUpperCase()}
                      </h4> */}
                      <h3 className="text-xl text-gray-900 leading-none pb-4 mb-4 border-b border-gray-200 duration-300 group-hover:text-hover">
                        {plan.toUpperCase()}
                      </h3>
                      <ul className="list-none overflow-x-auto overflow-y-auto h-48">
                      {service[plan].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 mb-2">
                          <CheckCircleIcon className="h-5 w-5 text-primary group-hover:text-hover" />
                          &nbsp;{feature}
                        </li>
                      ))}
                      </ul>
                      <button className="btn-primary text-base flex items-center mt-4 border-0 w-full">
                        Choose {plan.toUpperCase()}
                        <span aria-hidden="true" className="ml-auto">
                          →
                        </span>
                      </button>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Duration: {service[plan].time}
                      </p>
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
