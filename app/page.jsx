import Hero from "@/components/Hero";
import SideBar from "./SideBar";
import Jobs from "./Jobs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <div className="jobs flex-1 p-5 md:px-10">
        <div className="lg:grid grid-cols-7 h-full gap-4">
          <SideBar className="lg:col-span-2 sticky top-0 h-full py-3 rounded-md shadow-md ring-1 ring-slate-200/70" />

          <div className="lg:col-span-5">
            <Jobs />
          </div>
        </div>
      </div>
    </main>
  );
}
