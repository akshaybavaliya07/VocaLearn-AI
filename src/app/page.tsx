import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { companions, recentSessions } from "@/constants/index"

export default function Home() {
  return (
    <main>
      <h1>Popular Comapanions</h1>

      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center">
        {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                />
            ))}
      </section>

      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center">
        <CompanionsList  // title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"/>
        <CTA />
      </section>
    </main>
  );
}
