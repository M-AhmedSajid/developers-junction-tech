import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Portfolio() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 pt-10 mx-auto">
        <div className="flex flex-col text-center w-full" data-aos="fade-up">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Portfolio
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
          Explore our diverse portfolio showcasing successful projects and innovative solutions across various industries. See how we turn ideas into impactful results.
          </p>
        </div>
        <TabGroup>
          <TabList
            className="flex md:justify-center justify-start my-8"
            data-aos="fade-up"
          >
            <div className="bg-gray-200 rounded-md flex overflow-x-auto md:overflow-x-hidden planCtg">
              {portfolio.map((item) => (
                <Tab
                  key={item}
                  className="first:rounded-s-md last:rounded-e-md px-5 py-2.5 text-sm/6 font-semibold text-gray-600 whitespace-nowrap focus:outline-none data-[selected]:bg-primary data-[selected]:text-white hover:bg-hover hover:text-white duration-300"
                >
                  {item}
                </Tab>
              ))}
            </div>
          </TabList>
          <TabPanels>
            <TabPanel className="flex flex-wrap justify-center">
              {logos.map((project, i) => (
                <PortfolioItem {...project} key={i} />
              ))}
            </TabPanel>
            <TabPanel className="flex flex-wrap justify-center">
              {websites.map((project, i) => (
                <PortfolioItem {...project} key={i} />
              ))}
            </TabPanel>
            <TabPanel className="flex flex-wrap justify-center">
              {ecommerce.map((project, i) => (
                <PortfolioItem {...project} key={i} />
              ))}
            </TabPanel>
            <TabPanel className="flex flex-wrap justify-center">
              {apps.map((project, i) => (
                <PortfolioItem {...project} key={i} />
              ))}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}

const portfolio = [
  "Logo Designs",
  "Web Designs",
  "Ecommerce",
  "Mobile App",
];

import ghost from "../img/ghost.webp";
import remus from "../img/remus-daniek.webp";
import sdibametic from "../img/sdibametic.webp";
import unclaguel from "../img/unclaguel.webp";
import trio from "../img/trio-frnds.webp";
import gooswork from "../img/gooswork-mfc.webp";
import dragons from "../img/dragons.webp";
import cheetah from "../img/cheetah.webp";

const logos = [
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
  },
  {
    img: trio,
    altTxt: "Logo 5",
  },
  {
    img: gooswork,
    altTxt: "Logo 6",
  },
  {
    img: dragons,
    altTxt: "Logo 7",
  },
  {
    img: cheetah,
    altTxt: "Logo 8",
  },
];

import digilyn from "../img/digilyn.webp";
import clinic from "../img/clinic.webp";
import apex from "../img/apex.webp";
import sail from "../img/fire-sail.webp";
import desert from "../img/the-desert-shop.webp";
import hoopla from "../img/hoopla.webp";
import promo from "../img/promo.webp";

const websites = [
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
  {
    img: desert,
    altTxt: "Web Designs 5",
  },
  {
    img: hoopla,
    altTxt: "Web Designs 6",
  },
  {
    img: promo,
    altTxt: "Web Designs 7",
  },
];

import asian from "../img/asian-wok.webp";
import kg from "../img/kg.webp";
import talent from "../img/local-talent.webp";
import organic from "../img/organic.webp";
import qcycle from "../img/qcycle.webp";
import tyche from "../img/tyche.webp";
import appErp from "../img/app-erp.webp";

const ecommerce = [
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
  {
    img: qcycle,
    altTxt: "Ecommerce 5",
  },
  {
    img: tyche,
    altTxt: "Ecommerce 6",
  },
];

import nightlife from "../img/nightlife.webp";
import pickles from "../img/pickles.webp";
import event from "../img/event.webp";
import station from "../img/station.webp";
import lookupafter from "../img/lookupafter.webp";
import karoof from "../img/karoof.webp";
import PortfolioItem from "./PortfolioItem";

const apps = [
  {
    img: nightlife,
    altTxt: "Mobile App 1",
  },
  {
    img: pickles,
    altTxt: "Mobile App 2",
  },
  {
    img: event,
    altTxt: "Mobile App 3",
  },
  {
    img: station,
    altTxt: "Mobile App 4",
  },
  {
    img: lookupafter,
    altTxt: "Mobile App 5",
  },
  {
    img: karoof,
    altTxt: "Mobile App 6",
  },
  {
    img: appErp,
    altTxt: "Mobile App 7",
  },
];