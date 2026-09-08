"use client";

import { useMemo, useState } from "react";
import Hero from "@/components/team/Hero";
import Filters from "@/components/team/Filters";
import Grid from "@/components/team/Grid";
import { team } from "@/data/team";

export default function TeamPage() {
  const [active, setActive] = useState("All Team");

  const departments = [...new Set(team.map((member) => member.department))];
  const teams = [...new Set(team.map((member) => member.team))];

  const filteredTeam = useMemo(() => {
    if (active === "All Team") return team;

    return team.filter((member) => member.department === active);
  }, [active]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] text-[var(--foreground)]">
      {/* Subtle dotted background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.13)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Soft orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[var(--primary)]
          opacity-[0.045]
          blur-[140px]
        "
      />

      {/* Slight dark overlay for depth */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#080b14]/20
          to-[#080b14]/40
        "
      />

      {/* Page Content */}
      <div className="relative z-10">
        <Hero />

        <Filters
          active={active}
          setActive={setActive}
          departments={departments}
        />

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <Grid members={filteredTeam} teams={teams} />
        </section>
      </div>
    </main>
  );
}