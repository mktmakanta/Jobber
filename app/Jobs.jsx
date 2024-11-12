"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import JobsList from "@/components/JobsList";
import MobileFilter from "@/components/MobileFilter";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [titleSearch, setTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [inputLength, setInputLength] = useState(0);

  // for view display settings
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  /////////

  // to prevent background scroll when menu is open
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

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:5000/jobs");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

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

  const handleMobileInput = (e) => {
    const value = e.target.value;
    setInputLength(value.length);
    setTitleSearch(value);
  };

  return (
    <main className="col-span-5  space-y-3">
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

      {/* for search inputs view       */}
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
            {isFilterOpen ? (
              // filter
              <div>filter</div>
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
                              <li className="text-slate-500">{job.company}</li>
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

      {/* for filter inputs view  */}
      {isFilterOpen && (
        <div className="ring-1 ring-slate-200/70 bg-white lg:hidden  h-5/6 w-11/12 fixed bottom-0 py-6 space-y-6 px-5 rounded-t-xl overflow-scroll  ">
          <div className="">
            <div
              className=" cancel flex justify-end"
              onClick={(e) => {
                setIsFilterOpen(false);
              }}
            >
              <div className=" h-12 w-12 p-1 px-4 bg-slate-200/50 text-slate-400  rounded-full text-xl  flex justify-center items-center">
                X
              </div>
            </div>
          </div>
          <div className="  ">
            <MobileFilter />
          </div>
        </div>
      )}

      {/* search end  */}
      <JobsList filteredJobs={filteredJobs} />
    </main>
  );
}
