export default function SideBar() {
  return (
    <main className="hidden lg:block h-full col-span-2  py-3 rounded-md shadow-md ring-1 ring-slate-200/70 ">
      <div className="header flex justify-between items-center p-4 border-b-2 border-slate-200/80">
        <h2 className="font-medium">Filter</h2>
        <small className="text-red-500 font-medium">Clear all</small>
      </div>
      <div className="filters divide-y-2 divide-slate-200/75 px-4 space-y-4">
        <div className="date-post py-2 pt-4 px-3 space-y-3">
          <h1 className="font-semibold">Date Post</h1>
          <select className="w-full h-8 ring-1 ring-slate-300 rounded-sm px-4">
            <option value="" className=" ">
              Anytime
            </option>
            <option value="">Anytime 2</option>
            <option value="">Anytime 3</option>
            <option value="">Anytime 4</option>
          </select>
        </div>
        <div className="job-type px-3 py-2 space-y-3 pt-6">
          <h1 className=" font-semibold">Job Type</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Full-time</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Internship</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Freelance</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className=" mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span className="">Volunteer</span>
            </label>
          </div>
        </div>
        <div className="range-salary px-3 py-2 space-y-3 pt-6">
          <h1 className=" font-semibold">Range Salary</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2 gap-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="range"
                id=""
                className="mx-2 size-4 rounded-full  accent-green-600"
              />
              <span>Under $1000</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="range"
                id=""
                className="mx-2 size-4 rounded-full  accent-green-600"
              />
              <span>$1000 to $2500</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="range"
                id=""
                className="mx-2 size-4 rounded-full  accent-green-600"
              />
              <span>$2500 to $5000</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="range"
                id=""
                className="mx-2 size-4 rounded-full  accent-green-600 "
              />
              <span>Customs</span>
            </label>
          </div>
          <div className="range-slide flex justify-center pt-2">
            <label className="">
              {" "}
              $5000{" "}
              <input
                type="range"
                name=""
                id=""
                className="accent-green-600"
              />{" "}
              $100000
            </label>
          </div>
        </div>
        <div className="job-location px-3 py-2 space-y-2 pt-6">
          <h1 className=" font-semibold">On-site/remote</h1>
          <div className="checklist grid grid-cols-2 grid-rows-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>On-site</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Hybrid</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
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
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Management</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Communication</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Communication</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Developer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
              />
              <span>Designer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name=""
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
