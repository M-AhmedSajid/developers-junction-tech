import Button from "@/app/components/Button";
import LoaduseEffect from "@/app/utils/LoaduseEffect";
import { ChartBarIcon, ChartPieIcon, Cog8ToothIcon, DocumentTextIcon, LinkIcon, MagnifyingGlassIcon, PencilIcon, PresentationChartBarIcon, TicketIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "Digital Marketing Services | Developers Junction Tech",
  description: "Boost your brand with Developers Junction Tech's Digital Marketing services. We offer SEO strategies and Social Media Marketing campaigns designed to increase visibility, drive traffic, and maximize ROI."
}

export default function Example() {
  return (
    <div className="bg-white py-10">
      <LoaduseEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Marketing That Moves the Needle
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Marketing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a full range of digital marketing services to help
            businesses grow their online presence and connect with their target
            audience. Our strategies are designed to drive traffic, increase
            engagement, and boost conversions across multiple platforms.
          </p>
        </div>
        <div className="mt-5 flex justify-center flex-wrap">
          <div class="text-gray-600 body-font">
            <div class="container md:px-5 pt-10 md:pt-20 mx-auto">
              <div class="text-center">
                <h3 class="sm:text-3xl text-2xl font-semibold text-center title-font">
                  Our Digital Marketing Services Include
                </h3>
              </div>
              <div className="flex justify-center flex-wrap">
                {features.map((feature, i) => (
                  <div class="text-gray-600 w-full md:w-1/2 mt-10" key={i}>
                    <h4 className="sm:text-2xl text-xl font-semibold text-center text-primary">
                      {feature.name}
                    </h4>
                    <div class="md:px-5 flex flex-wrap">
                      {feature.items.map((item, i) => (
                      <div class="flex relative first:pt-10 pb-20 last:pb-10 sm:items-center mx-auto group" key={i}>
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                        {i + 1}
                        </div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                          <div class="flex-shrink-0 w-24 h-24 bg-primary/15 text-primary rounded-full inline-flex items-center justify-center duration-300 group-hover:text-white group-hover:bg-primary">
                            <item.icon className="w-12 h-12" />
                          </div>
                          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 class="font-medium title-font mb-1 text-xl duration-300 group-hover:text-primary">
                              {item.name}
                            </h2>
                            <p class="leading-relaxed">
                              {item.txt}
                            </p>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                Let&apos;s Connect with our experts! to explore best solutions for your business needs.
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
    name: "Social Media Marketing",
    items: [
      {
        name: "Social Media Strategy",
        txt: "Customized plans to help your brand grow on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        icon: ChartBarIcon,
      },
      {
        name: "Content Creation",
        txt: "Creative and eye-catching posts, ads, and captions to grab attention and keep your audience engaged.",
        icon: PencilIcon,
      },
      {
        name: "Social Media Ads",
        txt: "Targeted ads that reach the right people and help boost sales, with clear results.",
        icon: TicketIcon,
      },
      {
        name: "Community Management",
        txt: "Interact with your followers, reply to comments, and build a strong and loyal community.",
        icon: UserGroupIcon,
      },
      {
        name: "Analytics and Reporting",
        txt: "Monitor how well your social media efforts are working with easy-to-understand reports and insights.",
        icon: PresentationChartBarIcon,
      },
    ]
  },
  {
    name: "Search Engine Optimization",
    items: [
      {
        name: "SEO Strategy",
        txt: "We create a custom plan to improve your website's search rankings and make it more visible to your target audience.",
        icon: MagnifyingGlassIcon,
      },
      {
        name: "Keyword Research",
        txt: "Find the right keywords your customers are searching for to drive more traffic to your site.",
        icon: PencilIcon,
      },
      {
        name: "On-Page SEO",
        txt: "Optimize your website content, meta tags, and images to make it search engine-friendly.",
        icon: DocumentTextIcon,
      },
      {
        name: "Off-Page SEO",
        txt: "Build quality backlinks and improve your site's authority to rank higher in search results.",
        icon: LinkIcon,
      },
      {
        name: "Technical SEO",
        txt: "Fix any technical issues like site speed, mobile-friendliness, and indexing to improve your site's performance.",
        icon: Cog8ToothIcon,
      },
      {
        name: "Analytics and Reporting",
        txt: "Track your SEO performance with clear, detailed reports to measure progress and growth.",
        icon: ChartPieIcon,
      },
    ]
  },
];