"use client";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const ImgUpload = ({ blog, setBlog, coverImage, currentLocation }) => {
  const fileInputRef = useRef();

  const handleImgProcess = () => {
    if (coverImage && coverImage[0].type.startsWith("image/")) {
      let imgTag = `<img src="${URL.createObjectURL(coverImage[0])}" alt="${blog.altCoverImg}">`;
      fileInputRef.current.innerHTML = imgTag;
    } else {
      if (coverImage !== "") {
        toast.error("Invalid File. Please Upload Image File", "error");
        setBlog({ ...blog, coverImg: "" });
      }
    }
  };

  useEffect(() => {
    if (currentLocation === "AddBlog") {
      handleImgProcess();
    } else {
      if (typeof coverImage === "string") {
        let imgTag = `<img src="${coverImage}" alt="${blog.altCoverImg}">`;
        fileInputRef.current.innerHTML = imgTag;
      } else {
        handleImgProcess();
      }
    }
    // eslint-disable-next-line
  }, [coverImage]);

  return (
    <>
      <input
        type="file"
        id="img-upload"
        accept="image/*"
        onChange={(e) => {
          setBlog({ ...blog, coverImg: e.target.files });
        }}
        hidden
      />
      <label htmlFor="img-upload" className="col-md-8 mx-auto cursor-pointer">
        <div
          className={`block w-full rounded-md border-0 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 overflow-hidden sm:text-sm sm:leading-6 ${coverImage === "" ? 'py-10' : ''}`}
          ref={fileInputRef}
        >
          <h5 className="text-xl font-semibold">Upload Cover Photo</h5>
        </div>
      </label>
      {coverImage && (
        <div className="mt-6">
            <label
              htmlFor="altCoverImg"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Alt Text for Cover Image
            </label>
            <div className="mt-2.5">
              <input
                id="altCoverImg"
                name="altCoverImg"
                type="text"
                autoComplete="altCoverImg"
                value={blog.altCoverImg}
                onChange={(e) => setBlog({ ...blog, altCoverImg: e.target.value })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
        </div>
      )}
    </>
  );
};

export default ImgUpload;