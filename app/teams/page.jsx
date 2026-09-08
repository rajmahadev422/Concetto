"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/team/Hero";
import Filters from "@/components/team/Filters";
import Grid from "@/components/team/Grid";

import { team } from "@/data/team";

export default function TeamPage() {
  const [active, setActive] = useState("All Team");

  const departments = [
    ...new Set(team.map((member) => member.department)),
  ];

  const teams = [
    ...new Set(team.map((member) => member.team)),
  ];

  const filteredTeam = useMemo(() => {
    if (active === "All Team") return team;

    return team.filter(
      (member) => member.department === active
    );
  }, [active]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Hero />

      <Filters
        active={active}
        setActive={setActive}
        departments={departments}
      />

      <section className="mx-auto w-full max-w-7xl px-5 pb-20">
        <Grid
          members={filteredTeam}
          teams={teams}
        />
      </section>
    </main>
  );
}