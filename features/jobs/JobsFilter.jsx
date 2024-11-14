"use client";
import { useEffect, useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import JobsList from "@/features/jobs/JobsList";

export default function JobsFilter() {
  // Sidebar filter states
  const [postTime, setPostTime] = useState(""); //
  const [jobType, setJobType] = useState([]); //
  const [payValue, setPayValue] = useState([]); //
  const [jobLocation, setJobLocation] = useState([]); //
  const [jobFunction, setJobFunction] = useState([]); //
  const [payRange, setPayRange] = useState("45000");
  const [selectedPay, setSelectedPay] = useState("");

  //Search input states
  const [titleSearch, setTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [inputLength, setInputLength] = useState(0);

  // Filtered result states
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // For view display settings states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // To prevent background scroll when menu is open
  useEffect(() => {
    if (isSearchOpen || isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen, isFilterOpen]);

  //For fetching jobs for db
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:5000/jobs");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  //handling filtering
  useEffect(() => {
    if (titleSearch || locationSearch) {
      const filtered = jobs.filter((job) => {
        const matchesTitle =
          titleSearch === " " ||
          job.title.toLowerCase().includes(titleSearch.toLowerCase());
        const matchesLocation =
          locationSearch === " " ||
          job.location.toLowerCase().includes(locationSearch.toLowerCase());

        return matchesTitle && matchesLocation;
      });
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [titleSearch, locationSearch, jobs]);

  //for mobile view search input
  const handleMobileInput = (e) => {
    const value = e.target.value;
    setInputLength(value.length);
    setTitleSearch(value);
  };

  // filter sidebar event functions
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
    const value = e.target.value;
    setPayValue((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [value]
    );
  };
  const handlePayRange = (e) => {
    const value = e.target.value;
    setPayValue((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [value]
    );
    setPayRange(value);
  };

  // for range slide to be visible
  const handleSelected = (a) => {
    setSelectedPay(a);
  };
  const resetFilters = () => {
    setPostTime("");
    setPayRange("45000");
    setJobLocation([]);
    setJobFunction([]);
    setSelectedPay("");
  };
  console.log(payValue);

  return (
    <main className="lg:grid grid-cols-7 h-full gap-4 p-5">
      {/* selection/filter side bar inputs  filtering secttion  */}
      <section className="lg:col-span-2 hidden lg:block h-full py-3 rounded-md shadow-md ring-1 ring-slate-200/70">
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
                    onClick={() => handleSelected("45000")}
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
                      disabled={selectedPay !== "45000"}
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
      </section>

      {/* search input filtering secttion  */}
      <section className="lg:col-span-5  space-y-3">
        {/* search inputs*/}
        <div className="search flex justify-between items-center ring-1 ring-slate-200/70 shadow-sm rounded-md p-2  space-x-3">
          <div className=" hidden search-fields lg:grid grid-cols-2 items-center divide-x-2 w-full pl-4">
            <div className="field-one flex items-center gap-2 ">
              <div className="size-6 rounded-lg flex justify-center items-center">
                <FaSearch className="text-slate-400" />
              </div>

              <input
                type="search"
                value={titleSearch}
                onChange={(e) => setTitleSearch(e.target.value)}
                onFocus={(e) => setLocationSearch("")}
                className="w-full placeholder:text-sm placeholder:text-slate-400 caret-green-600 p-1 rounded-sm focus:outline-none focus:r ring-slate-200"
                placeholder="Search job title or keyword"
              />
            </div>

            <div className="field-two gap-2  items-center flex pl-4 ">
              <div className="size-6 rounded-full flex justify-center items-center">
                <FaMapMarkerAlt className="text-slate-400" />
              </div>
              <input
                type="search"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                onFocus={(e) => setTitleSearch("")}
                className="w-full placeholder:text-sm placeholder:text-slate-400 caret-green-600 caret p-1 rounded-sm focus:outline-none focus:r ring-slate-200"
                placeholder="Country or job location"
              />
            </div>
          </div>
          <div className="mobile-search lg:hidden flex items-center gap-2  w-full ">
            <div className="size-6 rounded-lg flex justify-center items-center">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              onClick={(e) => {
                setIsSearchOpen(true);
              }}
              // value={titleSearch}
              type="text"
              name=""
              id=""
              className="w-full   placeholder:text-sm placeholder:text-slate-400 caret-green-600 p-1 rounded-sm focus:outline-none focus:r ring-slate-200"
              placeholder="Search job title or keyword"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className=" mobile-filter lg:hidden bg-violet-600 text-white py-2 px-4 rounded-md text-nowrap"
              onClick={(e) => {
                setIsFilterOpen(true);
              }}
            >
              Filter
            </button>
          </div>
        </div>

        {/* for mobile search inputs view       */}
        {isSearchOpen && (
          <div className="ring-1 ring-slate-200/70 bg-white lg:hidden   h-5/6 w-11/12 fixed bottom-0 py-6 space-y-6 px-5 rounded-t-xl overflow-hidden ">
            <div
              className="flex justify-end"
              onClick={(e) => {
                setIsSearchOpen(false);
                setTitleSearch("");
              }}
            >
              <div className=" h-12 w-12 p-1 px-4 bg-slate-200/50 text-slate-400  rounded-full text-xl  flex justify-center items-center">
                X
              </div>
            </div>
            <div className=" flex items-center  ">
              {/* // filter */}
              {isFilterOpen ? (
                <section className=" max-w-2xl mx-auto ">
                  <div className=" h-full col-span-2  py-3 rounded-md shadow-md ring-1 ring-slate-200/70 ">
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
                                onClick={() => handleSelected("45000")}
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
                                  disabled={selectedPay !== "45000"}
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
                    <div className="clear-check grid grid-cols-2 gap-2 pt-5 px-4">
                      <button
                        onClick={resetFilters}
                        className="px-4 py-2  text-green-600 ring-1 ring-green-600 text-lg  rounded-md"
                      >
                        Clear all
                      </button>
                      <button className="bg-green-600 text-white text-xl text-center hover:bg-green-700 p-2 rounded-md">
                        Check
                      </button>
                    </div>
                  </div>
                </section>
              ) : (
                //  search mobile
                <div className="w-11/12 mx-auto space-y-5">
                  <input
                    onClick={(e) => {
                      setIsSearchOpen(true);
                    }}
                    value={titleSearch}
                    onChange={handleMobileInput}
                    onFocus={(e) => setLocationSearch("")}
                    type="search"
                    name=""
                    id=""
                    className="w-full placeholder:text-base placeholder:text-slate-500 caret-slate-600 p-1 h-12 px-5 rounded-full focus:outline-none bg-slate-100  focus:ring-1 focus:ring-slate-300"
                    placeholder="Search job title or keyword"
                  />

                  {inputLength > 0 && (
                    <div className="space-y-4 ">
                      {filteredJobs.map((job) => (
                        <div
                          key={job._id}
                          className="bg-slate-100 px-4 p-2 rounded-md ring-1 ring-slate-300 flex gap-4"
                        >
                          <div className="  w-16  rounded-md  ">
                            <img
                              className="w-full "
                              src={`/icons/${job.icon}.svg`}
                              alt={`${job.company} logo`}
                            />
                          </div>
                          <div className="role space-y-2 ">
                            <div className="role-details ">
                              <h1 className="font-semibold md:text-xl">
                                {job.title}
                              </h1>
                              <ul className=" flex items-center flex-wrap space-y-2 space-x-2">
                                <li className="text-slate-500">
                                  {job.company}
                                </li>
                                <li className=" text-sm text-red-400 bg-red-200 px-2 font-medium inline-flex rounded-full text-nowrap">
                                  {job.urgency}
                                </li>
                                <li className=" text-sm text-slate-700 bg-slate-300 px-4 font-medium inline-flex rounded-full text-nowrap">
                                  {job.pay.length === 1 ? (
                                    <span> ${job.pay[0]}</span>
                                  ) : job.pay.length === 2 ? (
                                    <span>
                                      ${job.pay[0]} - ${job.pay[1]}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              </ul>
                            </div>
                            <div className="">
                              <h1 className=" flex items-center gap-2">
                                {" "}
                                <FaMapMarkerAlt className="" />{" "}
                                <span className="">{job.location}</span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        {/* search end  */}
        <JobsList filteredJobs={filteredJobs} />
      </section>
    </main>
  );
}
