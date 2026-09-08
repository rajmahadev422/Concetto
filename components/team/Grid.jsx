import Card from "./Card";

export default function Grid({ members, teams }) {
  return (
    <div className="space-y-16 px-4 sm:px-6 md:space-y-20 lg:px-8">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        return (
          <section key={team}>
            {/* Team Heading */}
            <div className="mb-7 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-3xl">
                {team} Team
              </h2>

              {/* Orange fading gradient */}
              <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/70 to-transparent" />
            </div>

            {/* Team Cards */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
              {teamMembers.map((member) => (
                <Card key={member.name} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}