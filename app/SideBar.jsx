"use client";

import { useState } from "react";

export default function SideBar() {
  // states
  const [postTime, setPostTime] = useState(""); //
  const [jobType, setJobType] = useState([]); //
  const [payValue, setPayValue] = useState(""); //
  const [jobLocation, setJobLocation] = useState([]); //
  const [jobFunction, setJobFunction] = useState([]); //
  const [payRange, setPayRange] = useState("Custom");
  const [selectedPay, setSelectedPay] = useState("");

  // functions
  const handlePostTime = (e) => {
    setPostTime(e.target.value);
  };
  const handleJobType = (e) => {
    const value = e.target.value;
    setJobType((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const handleJobLocation = (e) => {
    const value = e.target.value;
    setJobLocation((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const handleJobFunction = (e) => {
    const value = e.target.value;
    setJobFunction((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const handlePayPrice = (e) => {
    setPayValue(e.target.value);
  };
  const handlePayRange = (e) => {
    setPayValue(e.target.value);
    setPayRange(e.target.value);
  };

  const handleSelected = (a) => {
    setSelectedPay(a);
  };
  const resetFilters = () => {
    setPostTime("");
    setJobType([]);
    setPayValue("");
    setPayRange("Custom");
    setJobLocation([]);
    setJobFunction([]);
    setSelectedPay("");
  };

  console.log(payValue);
  return (
    <main className="hidden lg:block h-full col-span-2  py-3 rounded-md shadow-md ring-1 ring-slate-200/70 ">
      <div className="header flex justify-between items-center p-4 border-b-2 border-slate-200/80">
        <h2 className="font-medium">Filter</h2>
        <small onClick={resetFilters} className="text-red-500 font-medium">
          Clear all
        </small>
      </div>
      <div className="filters divide-y-2 divide-slate-200/75 px-4 space-y-4">
        <div className="date-post py-2 pt-4 px-3 space-y-3">
          <h1 className="font-semibold">Date Post</h1>
          <select
            value={postTime}
            onChange={handlePostTime}
            className="w-full h-8 ring-1 ring-slate-300 rounded-sm px-4"
          >
            <option value="anytime">Anytime</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday </option>
            <option value="recently">Recently</option>
          </select>
        </div>
        <div className="job-type px-3 py-2 space-y-3 pt-6">
          <h1 className=" font-semibold">Job Type</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="fulltime"
                onChange={handleJobType}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Full-time</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="internship"
                onChange={handleJobType}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Internship</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="freelance"
                onChange={handleJobType}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Freelance</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="volunteer"
                onChange={handleJobType}
                name=""
                id=""
                className=" mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span className="">Volunteer</span>
            </label>
          </div>
        </div>
        <div className="range-pay px-3 py-2 space-y-3 pt-6">
          <h1 className=" font-semibold">Range pay</h1>
          <div className="divide-y divide-dashed space-y-4 divide-green-600">
            <div className="checklist grid grid-cols-2 grid-rows-2 gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="range"
                  value="1000"
                  onChange={handlePayPrice}
                  onClick={() => handleSelected("option1")}
                  id=""
                  className="mx-2 size-4 rounded-full  accent-green-600"
                />
                <span>Under $1000</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="range"
                  value="2500"
                  onChange={handlePayPrice}
                  onClick={() => handleSelected("option2")}
                  id=""
                  className="mx-2 size-4 rounded-full  accent-green-600"
                />
                <span>$1000 to $2500</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="range"
                  value="5000"
                  onChange={handlePayPrice}
                  onClick={() => handleSelected("option3")}
                  id=""
                  className="mx-2 size-4 rounded-full  accent-green-600"
                />
                <span>$2500 to $5000</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="range"
                  value={payRange}
                  onChange={handlePayPrice}
                  onClick={() => handleSelected("customize")}
                  id=""
                  className="mx-2 size-4 rounded-full  accent-green-600 "
                />
                <span>Customs</span>
              </label>
            </div>
            <div className="range-slide flex justify-center pt-2">
              <label className="space-y-2">
                <div className="text-center">{payRange}</div>
                <div className=" flex justify-center items-center gap-2">
                  <span> $5000</span>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    value={payRange}
                    onChange={handlePayRange}
                    disabled={selectedPay !== "customize"}
                    name="range-slide"
                    id=""
                    className="accent-green-600"
                  />
                  <span> $100000</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="job-location px-3 py-2 space-y-2 pt-6">
          <h1 className=" font-semibold">On-site/remote</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="onsite"
                onChange={handleJobLocation}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>On-site</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="hybrid"
                onChange={handleJobLocation}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Hybrid</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="remote"
                onChange={handleJobLocation}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Remote</span>
            </label>
          </div>
        </div>
        <div className="job-function px-3 py-2 space-y-2 pt-6">
          <h1 className=" font-semibold">Job function</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="public relation"
                onChange={handleJobFunction}
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Public Relations</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="management"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Management</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="customer care"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Customer Care</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="Engineer"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Engineer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="developer"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Developer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="designer"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Designer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                value="delivery"
                onChange={handleJobFunction}
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Delivery</span>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
