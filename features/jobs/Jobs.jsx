import Hero from "@/components/Hero";
import JobsFilter from "./JobsFilter";

export default function Filter() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <JobsFilter />
    </main>
  );
}
