import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-950 text-gray-100 px-4 py-3 w-7/12 m-auto my-2 rounded-md">
      <div className="text-center ">
        <h1 className="text-3xl">Contact Us</h1>
      </div>
      <div className="max-w-screen-xl mt-6 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-6 lg:px-8 xl:px-24 py-4 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-2xl font-bold leading-tight">
              Lets talk about everything!
            </span>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <span className="underline">email</span>{" "}
              instead.
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-xs text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="mt-4">
            <span className="uppercase text-xs text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="email"
            />
          </div>
          <div className="mt-4">
            <span className="uppercase text-xs text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-4">
            <button className="uppercase text-xs font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
