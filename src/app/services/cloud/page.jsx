import Button from "@/app/components/Button";
import LoaduseEffect from "@/app/utils/LoaduseEffect";
import { CircleStackIcon, CloudIcon } from "@heroicons/react/24/solid";
import ServicePicItem from "@/app/components/ServicePicItem";

export const metadata = {
  title: "Cloud Services | Developers Junction Tech",
  description:
    "Transform your business with Developers Junction Tech's cloud solutions. Specializing in Microsoft Dynamics 365 and Oracle, we streamline your operations, enhance productivity, and provide scalable ERP systems tailored to your needs.",
};

import dynamics from "../../img/microsoft-dynamics-365.webp";
import oracle from "../../img/oracle.webp";

export default function Example() {
  return (
    <div className="bg-white py-10">
      <LoaduseEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary flex items-center md:justify-center">
            <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-primary flex-shrink-0">
              <CloudIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </div>
            Cloud Solutions That Elevate
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cloud Based ERP Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Developers Junction Tech and BI Tech in USA jointly offer
            specialized Cloud and SaaS (Software as a Service) solutions to help
            businesses scale and streamline their operations. Our cloud services
            provide secure, scalable, and flexible access to your data and
            applications from anywhere, at any time. Whether you&apos;re
            migrating existing systems to the cloud or building new SaaS
            applications, we ensure seamless integration, reliable performance,
            and enhanced security. With features like automated updates and data
            backups, our Cloud and SaaS solutions allow you to focus on growing
            your business while we handle the technology.
            <br />
            We also specialize in delivering ERP (Enterprise Resource Planning)
            solutions to automate and optimize your business processes. Our ERP
            systems integrate key functions such as finance & Operations, human
            resources, supply chain, inventory, and sales, providing a unified
            platform for better operational management. By leveraging leading
            ERP platforms like Microsoft Dynamics 365 and Oracle we help improve
            efficiency, reduce costs, and offer real-time insights into your
            business. Whether you&apos;re looking to streamline workflows, boost
            productivity, or scale your operations, our ERP solutions are
            designed to meet your specific needs and drive long-term success.
            <br />
            Together, our cloud, SaaS, and ERP services provide cutting-edge
            technology solutions that enhance your business efficiency and
            support your growth.
          </p>
        </div>
        <div className="mt-5 flex justify-center flex-wrap">
          {features.map((feature, i) => (
            <div className="py-4 md:p-4 w-full md:w-1/2" key={i}>
              <div className="relative w-full h-full">
                <div className="rounded-lg h-full bg-gray-100 p-8 duration-300 hover:scale-[1.02] hover:bg-primary hover:text-white group justify-between flex flex-col">
                  <div>
                    <div className="flex items-center mb-3">
                      <Image
                        src={feature.img}
                        alt={`${feature.img} Logo`}
                        className="mr-5"
                        width={100}
                        height={100}
                      />
                      <h2 className="text-gray-900 text-lg title-font font-medium group-hover:text-white">
                        {feature.name}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p
                        className="leading-relaxed text-base group-hover:text-white"
                        dangerouslySetInnerHTML={{
                          __html: feature.description,
                        }}
                      ></p>
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

import dynamics1 from "../../img/dynamics1.webp";
import dynamics2 from "../../img/dynamics2.webp";
import dynamics3 from "../../img/dynamics3.webp";
import dynamics4 from "../../img/dynamics4.webp";

import oracle1 from "../../img/oracle1.webp";
import oracle2 from "../../img/oracle2.webp";
import oracle3 from "../../img/oracle3.webp";
import oracle4 from "../../img/oracle4.webp";
import Image from "next/image";

const features = [
  {
    name: "Microsoft Dynamics 365",
    description:
      "Microsoft Dynamics 365 offers comprehensive tools to manage and automate various business processes across departments. ERP systems like Dynamics 365 centralize data from different functions such as finance, manufacturing, supply chain, procurement, and human resources, helping companies streamline operations, improve efficiency, and make data-driven decisions. Key ERP functionalities in Dynamics 365 include: <br/><br/><ol class='list-decimal pl-5'><li><strong>Finance and Operation:</strong><br/> Handles general ledger, accounts payable/receivable, budgeting, and financial reporting.</li><li><strong>Supply Chain Management:</strong><br/> Manages inventory, procurement, production planning, and logistics.</li><li><strong>Human Resources:</strong><br/> Automates HR processes like employee records, payroll, benefits, and performance management.</li><li><strong>Project Management:</strong><br/> Tracks project costs, timelines, and resource allocation.</li><li><strong>Manufacturing:</strong><br/> Supports production planning, shop floor management, and quality control.</li></ol><br/>Overall, in the ERP framework, Dynamics 365 integrates these functions into a single platform, ensuring data consistency and enabling more efficient business operations.",
    img: dynamics,
    dir: true,
    pic: [
      {
        img: dynamics1,
        altTxt: "Microsoft Dynamics 365 Dashboard 1",
      },
      {
        img: dynamics2,
        altTxt: "Microsoft Dynamics 365 Dashboard 2",
      },
      {
        img: dynamics3,
        altTxt: "Microsoft Dynamics 365 Dashboard 3",
      },
      {
        img: dynamics4,
        altTxt: "Microsoft Dynamics 365 Dashboard 4",
      },
    ],
  },
  {
    name: "Oracle",
    description:
      "Oracle offers a comprehensive suite of ERP solutions under its Oracle Cloud ERP platform. These tools help businesses manage various back-office operations, streamline processes, and improve decision-making across different departments like finance, supply chain, and human resources. We provide best cloud solutions for enterprise performance management (EPM) and analytics, and some of the notable products are PBCS, EPBCS, OAC, and FCCS. Here's what they represent:<ol class='list-decimal pl-5'><li><strong>PBCS (Planning and Budgeting Cloud Service)</strong><ul class='list-disc pl-10'><li>Integrated financial and operational planning</li><li>Driver-based modeling</li><li>Flexible forecasting and budgeting</li><li>Reporting and analytics tools</li></ul></li><li><strong>EPBCS (Enterprise Planning and Budgeting Cloud Service)</strong><ul class='list-disc pl-10'><li>Financials</li><li>Workforce</li><li>Capital assets</li><li>Projects</li></ul></li><li><strong>OAC (Oracle Analytics Cloud)</strong><ul class='list-disc pl-10'><li>Data visualization and exploration</li><li>Predictive analytics and machine learning</li><li>Enterprise reporting and dashboards</li><li>Self-service data preparation and management</li></ul></li><li><strong>FCCS (Financial Consolidation and Close Cloud Service)</strong><ul class='list-disc pl-10'><li>Consolidation processes</li><li>Close tasks and workflows</li><li>Intercompany eliminations</li><li>Currency translations</li></ul></li>",
    img: oracle,
    dir: false,
    pic: [
      {
        img: oracle1,
        altTxt: "Oracle Reports 1",
      },
      {
        img: oracle2,
        altTxt: "Oracle Reports 2",
      },
      {
        img: oracle3,
        altTxt: "Oracle Reports 3",
      },
      {
        img: oracle4,
        altTxt: "Oracle Reports 4",
      },
    ],
  },
];
