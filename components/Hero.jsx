import React from "react";

export default function Hero() {
  return (
    <main>
      <div className="hero h-52 w-full bg-[url(/images/banner.svg)] bg-cover bg-center p-10 flex items-center">
        <div className=" space-y-2">
          <h1 className="font-semibold text-3xl">Find your dream job</h1>
          <p className=" text-slate-500">
            Looking for jobs? Browse our latest job openings to view & apply to
            the best jobs today!
          </p>
        </div>
      </div>
    </main>
  );
}
