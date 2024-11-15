import Hero from "@/components/Hero";
import JobsFilter from "@/features/jobs/JobsFilter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <JobsFilter />
    </main>
  );
}
