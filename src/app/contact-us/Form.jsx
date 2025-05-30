"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Form() {
    const [details, setDetails] = useState({ name: "", email: "", msg: ""});
  const [loading, setLoading] = useState(false);

  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!details.name) {
        toast.error("Please Enter Your Name");
    } else if (!details.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        toast.error("Your Email is Invalid");
    } else if (!details.msg) {
        toast.error("Please Enter A Message");
    } else {
        setLoading(true);
    emailjs
      .sendForm(
        "service_wo5pm9c",
        "template_ds8eza9",
        form.current,
        "STNQkwj_oAyZm1CoT"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Form send successfully!");
          } else {
            toast.error("A problem occured! Please try again");
          }
          form.current.reset();
          setDetails({ message: "", subject: "" });
          setLoading(false);
        },
        (error) => {
          toast.error(error);
          setLoading(false);
        }
      );
    }
  };
  return (
    <form
      ref={form}
      className="pt-20 pb-24 sm:pb-32 lg:py-48 px-6 lg:px-8 bg-white border-l border-gray-300"
    >
      <div className="mx-auto lg:mr-0">
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label
              for="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={details.name}
                onChange={onchange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={details.email}
                onChange={onchange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="msg"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="msg"
                id="msg"
                rows="4"
                value={details.msg}
                onChange={onchange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
            disabled={loading}
            onClick={(e) => sendEmail(e)}
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
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
