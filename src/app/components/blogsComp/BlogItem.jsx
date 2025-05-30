import React from "react";
import LinkComp from "../LinkComp";
import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CtgLink from "./CtgLink";
import AdminTools from "./AdminTools";
import { cookies } from "next/headers";

export default async function BlogItem({
  id,
  title,
  summary,
  coverImg,
  altCoverImg,
  views,
  category,
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group shadow-md hover:shadow-xl duration-300">
      <div className="w-full relative overflow-hidden aspect-video">
        {token && <AdminTools id={id} />}
        <Image
          className="group-hover:scale-110 duration-300 object-cover"
          src={`/${coverImg.startsWith("/") ? coverImg.slice(1) : coverImg}`}
          alt={altCoverImg}
          title={altCoverImg}
          fill
        />
      </div>
      <div className="p-6 pt-3">
        <div className="flex items-center flex-wrap">
          {category?.split(",").map((ctg, i) => (
            <CtgLink href={`/blogs/category/${ctg.trim()}`} key={i}>
              {ctg.trim()}
            </CtgLink>
          ))}
        </div>
        <h2 className="title-font text-lg font-medium text-primary mb-3 group-hover:text-hover duration-300 line-clamp-2">
          {title}
        </h2>
        <p className="leading-relaxed mb-3 line-clamp-3">{summary}</p>
        <div className="flex items-center justify-between">
          <LinkComp href={`/blog/${id}`} redirect={true}>
            Learn More <span aria-hidden="true">→</span>
          </LinkComp>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm py-1">
            <EyeIcon className="w-4 h-4 mr-1" />
            {views}
          </span>
        </div>
      </div>
    </div>
  );
}
