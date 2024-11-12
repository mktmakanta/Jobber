import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function JobsList({ filteredJobs }) {
  return (
    <main className=" space-y-3">
      <h1 className="text-slate-400  font-semibold">
        {filteredJobs.length} Jobs Available
      </h1>
      <div className="jobs space-y-5">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="job space-y-6 shadow-md ring-1 ring-slate-200/70 p-5 rounded-md hover:ring-1 hover:ring-slate-300 hover:shadow-lg "
          >
            <div className="header flex gap-3">
              <div className="profile-picture  w-16 h-16 rounded-md  flex justify-center items-center">
                <Image
                  src={`/icons/${job.icon}.svg`}
                  alt={`${job.company} logo`}
                  width={64}
                  height={64}
                  quality={100}
                />
              </div>
              <div className="role space-y-2 lg:flex w-full justify-between ">
                <div className="role-details space-y-1">
                  <h1 className="font-semibold text-2xl">{job.title}</h1>
                  <ul className=" flex items-center flex-wrap space-y-1 space-x-2">
                    <li className="text-slate-500">{job.company}</li>
                    <li className=" text-sm text-orange-400 bg-orange-200 px-4 font-medium inline-block rounded-full text-nowrap">
                      {job.jobType}
                    </li>
                    <li className=" text-sm text-red-400 bg-red-200 px-4 font-medium inline-flex rounded-full text-nowrap">
                      {job.urgency}
                    </li>
                    <li className=" text-sm text-slate-500 bg-slate-200 px-4 font-medium inline-flex rounded-full text-nowrap">
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
                <div className="loc-times space-y-1">
                  <h1 className=" flex items-center gap-2">
                    {" "}
                    <FaMapMarkerAlt className="" />{" "}
                    <span className="font-semibold">{job.location}</span>
                  </h1>
                  <p className="text-slate-400">Posted {job.postedTime}</p>
                </div>
              </div>
            </div>
            <div className="job-description px-3">
              <ul className="text-slate-500/70 list-disc px-4">
                <li>{job.description[0]}</li>
                <li>{job.description[1]}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
