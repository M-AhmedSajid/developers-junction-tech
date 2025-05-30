import React from "react";
import BlogItem from "@/app/components/blogsComp/BlogItem";
import LoaduseEffect from "@/app/utils/LoaduseEffect";

export async function generateMetadata({ params }) {
  return {
    title: `${params.key} Blogs`,
    description: `Check out the ${params.key} Blogs of Developers Junction Tech! Discover tips, trends, and insights to stay updated and informed.`,
  };
}

export default async function Page({params}) {
  let data = await fetch(
    `https://www.devjunctiontech.com/api/blogs/getBlogByCtg/${params.key}?limit=15&offset=0`, { cache: "no-store"}
  );
  let blogs = await data.json();
  return (
    <section className="text-gray-600 ">
      <LoaduseEffect />
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-center"
          data-aos="fade-up"
        >
          {params.key} Blogs
        </h1>
        <div className="flex flex-wrap">
          {blogs.map((blog) => (
            <div className="py-4 md:px-4 md:w-1/3" key={blog.id}>
              <BlogItem {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}