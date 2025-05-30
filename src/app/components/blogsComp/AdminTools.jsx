"use client"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function AdminTools({id}) {

  const router = useRouter();

  const deleteBlog = async () => {
    // API Call
    const response = await fetch(`/api/blogs/deleteBlog/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    const json = await response.json();
    if (json.success === true) {
      await fetch('/api/sitemap', { method: 'POST' });
      toast.success("Blog has been Deleted!");
      router.refresh();
    } else {
      toast.error("Internal Server Error! Something went Wrong");
    }
  }

  return (
    <div className="absolute top-3 -right-10 space-y-3 flex items-center justify-center flex-col z-10 duration-300 group-hover:right-3">
        <Link href={`/edit-blog/${id}`}>
      <PencilIcon className="w-8 h-8 p-1.5 rounded-full flex-none text-black cursor-pointer hover:bg-white bg-gray-300 duration-300" />
        </Link>
      <TrashIcon className="w-8 h-8 p-1.5 rounded-full flex-none text-white cursor-pointer hover:bg-red-700 bg-red-600 duration-300" onClick={()=>deleteBlog()} />
    </div>
  );
}
