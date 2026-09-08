import Card from "./Card";

export default function Grid({ members, teams }) {
  return (
    <div className="space-y-16 bg-black px-4 sm:px-6 md:space-y-20 lg:px-8">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        return (
          <section key={team} className="mx-auto w-full max-w-7xl">
            {/* Team Heading */}
            <div className="mb-7 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                {team} Team
              </h2>

              {/* Heading Line */}
              <div className="mx-auto mt-3 h-px w-24 bg-[var(--primary)]" />
            </div>

            {/* Team Cards */}
            <div className="flex flex-wrap justify-center gap-6 xl:gap-7">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.25rem)]"
                >
                  <Card member={member} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}