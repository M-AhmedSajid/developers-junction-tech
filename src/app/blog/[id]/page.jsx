import Image from "next/image";
import "./blog.css";
import CtgLink from "@/app/components/blogsComp/CtgLink";
import { EyeIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import BlogItem from "@/app/components/blogsComp/BlogItem";
import LoaduseEffect from "@/app/utils/LoaduseEffect";

export async function generateMetadata({ params }) {
  const blog = await fetch(
    `https://www.devjunctiontech.com/api/blogs/getBlog/${params.id}`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return {
    title: blog.title,
    description: blog.summary || "Read our latest blog on cutting-edge technology, industry insights, and development practices.",
    openGraph: {
      title: blog.title,
      description: blog.summary,
      url: `https://www.devjunctiontech.com/blog/${params.id}`,
      images: [
        {
          url: `/${
            blog.coverImg.startsWith("/")
              ? blog.coverImg.slice(1)
              : blog.coverImg
          }`,
          alt: blog.altCoverImg,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      image: `/${
        blog.coverImg.startsWith("/") ? blog.coverImg.slice(1) : blog.coverImg
      }`,
    },
  };
}

export default async function Page({ params }) {
  let blogData = await fetch(
    `https://www.devjunctiontech.com/api/blogs/getBlog/${params.id}`,
    { cache: "no-store" }
  );
  await fetch(`https://www.devjunctiontech.com/api/blogs/incrementViews/${params.id}`, {
    method: "PUT",
    cache: "no-store",
  });
  let blog = await blogData.json();

  let blogsData = await fetch(
    "https://www.devjunctiontech.com/api/blogs/getAllBlogs?limit=5",
    { cache: "no-store" }
  );
  let blogs = await blogsData.json();
  return (
    <div className="container pt-8 pb-16 lg:pt-16 flex justify-center flex-wrap">
      <LoaduseEffect />
      <main className="w-full md:w-3/4 pb-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between pl-4 pr-4 md:pr-8">
          <article className="w-full">
            <div className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-2 text-4xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                {blog.title}
              </h1>
              <p className="text-base text-gray-500 flex items-center flex-wrap justify-between mb-0">
                <time
                  title={format(
                    new Date(blog.createdAt),
                    "d-MMM-yyyy, hh:mm a"
                  )}
                >
                  Uploaded at:{" "}
                  {format(new Date(blog.createdAt), "d-MMM-yyyy, hh:mm a")}
                </time>
                <span className="inline-flex items-center">
                  <EyeIcon className="w-4 h-4 mr-1" />
                  {blog.views} Views
                </span>
              </p>
              <div className="flex items-center flex-wrap">
                {blog.category?.split(",").map((ctg, i) => (
                  <CtgLink href={`/blogs/category/${ctg.trim()}`} key={i}>
                    {ctg.trim()}
                  </CtgLink>
                ))}
              </div>
            </div>
            <figure className="mb-4 w-full relative aspect-video overflow-hidden">
              <Image
                src={`/${
                  blog.coverImg.startsWith("/")
                    ? blog.coverImg.slice(1)
                    : blog.coverImg
                }`}
                alt={blog.altCoverImg}
                title={blog.altCoverImg}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
              />
              <figcaption className="sr-only">{blog.altCoverImg}</figcaption>
            </figure>
            <div className="bg-gray-200 p-4 pt-2">
              <h2 className="text-3xl font-bold mb-2">Summary</h2>
              <p className="text-lg">{blog.summary}</p>
            </div>
            <div
              className="main-context"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <section className="not-format">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 my-4">
                Discussion
              </h2>
            </section>
          </article>
        </div>
      </main>

      <aside aria-label="Related articles" className="md:w-1/4">
        <div className="px-4 md:px-0">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Related articles
          </h2>
          <div className="space-y-5">
            {blogs.map((blog) => (
              <BlogItem {...blog} key={blog.id} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
