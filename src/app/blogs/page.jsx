import React from "react";
import BlogItem from "../components/blogsComp/BlogItem";
import LoaduseEffect from "../utils/LoaduseEffect";

export const metadata = {
  title: "Blogs | Developers Junction Tech",
  description: "Blogs page of Developers Junction Tech, Where you find informational blogs of Tech and much more!"
}

export default async function page() {
  let data = await fetch(
    "https://www.devjunctiontech.com/api/blogs/getAllBlogs?limit=15&offset=0", { cache: "no-store"}
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
          Blogs
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
