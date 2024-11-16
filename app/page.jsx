import Hero from "@/components/Hero";
import JobsFilter from "./JobsFilter";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Hero />
      <JobsFilter />
      <JobsFilter />
    </main>
  );
}
