import React from "react";
import { LuTarget, LuClipboardList, LuUsers } from "react-icons/lu";

const Content = () => {
  return (
    <div className="relative z-30  w-full flex flex-col">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="  bg-[#f4f5f7]  grid grid-cols-1 md:grid-cols-3 mx-auto  -mt-10">
          {/* *********** first ********** */}
          <div className="flex flex-col bg-transparent  p-8 border-b md:border-b-0 md:border-r border-gray-300">
            <div className="text-[#ebd02b] text-6xl  mb-6 transform   mx-auto">
              <LuTarget />
            </div>
            <h1 className="items-center text-center text-2xl font-bold mb-4">
              Our Mission
            </h1>
            <p className="text-[#454545] text-center leading-relaxed ">
              LiGHT exists to share the knowledge, experience, and expertise of
              the Gopali Youth Welfare Society to engage young people across the
              nation in solving social problems that affect their generation.
            </p>
          </div>
          {/* *********** second ********** */}
          <div className="flex flex-col bg-transparent  p-8 border-b md:border-b-0 md:border-r border-gray-300">
            <div className="text-[#ebd02b] text-6xl  mb-6 transform   mx-auto">
              <LuClipboardList />
            </div>

            <h1 className="items-center text-center text-2xl font-bold mb-4">
              Our Plan
            </h1>
            <p className="text-[#454545] text-center leading-relaxed">
              We aim to engage our centers in developing a nationwide social
              initiative. Our goal is to provide them with the essential skills
              to recognize local challenges and design effective social
              initiatives as they progress.
            </p>
          </div>
          {/* *********** third ********** */}
          <div className="flex flex-col bg-transparent  p-8">
            <div className="text-[#ebd02b] text-6xl  mb-6 transform   mx-auto">
              <LuUsers />
            </div>
            <h1 className="items-center text-center text-2xl font-bold mb-4">
              Our Vision
            </h1>
            <p className="text-[#454545] text-center leading-relaxed">
              We aim to build a network of student-led centers across India,
              working to uplift marginalized communities and support sustainable
              development.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#202027] flex grid-col-1 lg:grid-col-12 w-full px-5 lg:px-30 gap-10 items-center p-2 lg:p-20 ">
        <div className="lg:col-span-5 space-y-4">
          <h1 className=" w-full font-bold text-4xl lg:col-span-5  text-gray-300 text-center justify-center">
            OUR REACH
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4 w-full text-gray-200">
          <div className=" py-2 m-2 text-center rounded-md">
            <h1 className="text-yellow-300 text-4xl font-bold">11</h1>
            <p>CENTERS</p>
          </div>
          <div className=" py-2 m-2 text-center rounded-md">
            <h1 className="text-yellow-300 text-4xl font-bold">7</h1>
            <p>STATES</p>
          </div>
          <div className=" py-2 m-2 text-center rounded-md">
            <h1 className="text-yellow-300 text-4xl font-bold ">400+</h1>
            <p>ACTIVE MEMBERS</p>
          </div>
          {/* Yeh galat tareeka thaa, isse line nahi dikhegi */}
          <div className="underline underline-offset-14 decoration-yellow-400"></div>
        </div>
      </div>

      <div className="py-20 px-5 lg:px-4 text-center justify-center flex-col">
        <h1 className="font-bold text-4xl  text-center justify-center">
          Featured Events
        </h1>
        <div className="w-12 md:w-20 h-1 bg-yellow-400 rounded-full mt-3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2 bg:px-40  ">
        <div className="flex flex-col md:flex-row rounded-4xl border-4  border-yellow-400 m-4 md:m-10 overflow-hidden">
          <img
            src="/box1.jpg"
            alt=""
            className="w-full md:w-60 rounded-l-4xl h-60 md:h-75"
          />
          <div className="flex flex-col text-xs space-x-5 tracking-wide leading-relaxed p-4">
            <h1 className="text-2xl font-semibold p-1">LiGHT Akola Event</h1>
            <p className="text-gray-500 ">Total Number of Children Benefited</p>
            <h1 className="text-1xl font-semibold ">500+</h1>
            <p className="text-gray-500 ">Total Funds Raised in the Event</p>
            <h1 className="text-1xl font-semibold ">8125</h1>
            <p className="space-y-5 text-gray-500 my-5">
              The event was conducted to raise money to provide a Volleyball
              court, and books for the library of a school named Dr. S R Patil
              School.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  rounded-4xl border-4  border-yellow-400  m-4 md:m-10 overflow-hidden">
          <img
            src="/box2.jpg"
            alt=""
            className="w-full md:w-60 rounded-l-4xl h-60 md:h-75 "
          />
          <div className="flex flex-col text-xs space-x-5 tracking-wide leading-relaxed p-4">
            <h1 className="text-2xl font-semibold p-2">LiGHT Akola Event</h1>
            <p className="text-gray-500 ">Total Number of Children Benefited</p>
            <h1 className="text-1xl font-semibold ">500+</h1>
            <p className="text-gray-500 ">Total Funds Raised in the Event</p>
            <h1 className="text-1xl font-semibold ">8125</h1>
            <p className="space-y-5 text-gray-500 my-5">
              The event was conducted to raise money to provide a Volleyball
              court, and books for the library of a school named Dr. S R Patil
              School.
            </p>
          </div>
        </div>
        <div className="py-20 px-5 lg:px-4 text-center justify-center flex-col">
          <h1 className="font-bold text-4xl  text-center justify-center">
            Media Coverage
          </h1>
          <div className="w-12 md:w-20 h-1 bg-yellow-400 rounded-full mt-3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
