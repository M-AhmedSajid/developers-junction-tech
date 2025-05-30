"use client";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import ImgUpload from "../../components/blogsComp/ImgUpload";

// Dynamically import TxtEditor with SSR disabled
const TxtEditor = dynamic(
  () => import("../../components/blogsComp/TxtEditor"),
  {
    ssr: false,
  }
);

export default function Page({ params }) {
  const id = params.id;
  const [blog, setBlog] = useState({
    title: "",
    summary: "",
    content: "",
    coverImg: "",
    altCoverImg: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const { title, summary, content, coverImg, altCoverImg, category } = blog;
  const router = useRouter();

  const editBlog = async (e) => {
    e.preventDefault();
    if (!title) {
      toast.error("Enter the Title");
    } else if (!summary) {
      toast.error("Enter the Summary");
    } else if (!content) {
      toast.error("Enter the Content");
    } else if (!coverImg) {
      toast.error("Upload Cover Photo");
    } else if (!altCoverImg) {
      toast.error("Enter the Alternative Text for Cover Photo");
    } else if (!category) {
      toast.error("Enter the Category");
    } else {
      setLoading(true);
      const data = new FormData();
      data.set("title", title);
      data.set("summary", summary);
      data.set("content", content);
      if (coverImg?.[0]) {
        data.set("coverImg", coverImg?.[0]);
      }
      data.set("altCoverImg", altCoverImg);
      data.set("category", category);
      const response = await fetch(`/api/blogs/updateBlog/${id}`, {
        method: "PUT",
        body: data,
        credentials: "include",
      });
      const json = await response.json();
      setLoading(false);
      if (json.success === true) {
        await fetch("/api/sitemap", { method: "POST" });
        router.replace(`/blog/${id}`);
        toast.success("Blog Updated Successfully");
      } else {
        toast.error("Server Error! Blog didn't update");
      }
    }
  };

  const getBlog = useCallback(async () => {
    let blogData = await fetch(
      `https://www.devjunctiontech.com/api/blogs/getBlog/${id}`,
      { cache: "no-store" }
    );
    let blog = await blogData.json();
    return blog;
  }, [id]);

  useEffect(() => {
    getBlog()
      .then((blogData) => {
        setBlog(blogData);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, [getBlog]);

  return (
    <div className="isolate bg-white px-6 py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Edit Blog
        </h2>
      </div>
      <form className="mx-auto mt-10 max-w-xl sm:mt-5">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <div>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                value={blog.title}
                onChange={onChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="summary"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Summary
            </label>
            <div className="mt-2.5">
              <input
                id="summary"
                name="summary"
                type="text"
                autoComplete="summary"
                value={blog.summary}
                onChange={onChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2.5">
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="category"
                value={blog.category}
                onChange={onChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <ImgUpload
              blog={blog}
              setBlog={setBlog}
              coverImage={coverImg}
              currentLocation={"EditBlog"}
            />
          </div>
          <TxtEditor
            value={blog.content}
            onChange={(newVal) => setBlog({ ...blog, content: newVal })}
          />
        </div>
        <div className="mt-10">
          <button
            className="btn-primary w-full flex items-center justify-center"
            disabled={loading}
            onClick={(e) => editBlog(e)}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              className={`w-5 h-5 mr-3 animate-spin ${
                loading ? "block" : "hidden"
              }`}
            >
              <g>
                <circle
                  strokeDasharray="164.93361431346415 56.97787143782138"
                  r="35"
                  strokeWidth="10"
                  stroke="#fff"
                  fill="none"
                  cy="50"
                  cx="50"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <g />
              </g>
            </svg>
            Edit Blog
          </button>
        </div>
      </form>
    </div>
  );
}
