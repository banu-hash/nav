import { BookOpen, Code2, GraduationCap, Lightbulb } from "lucide-react";

const TEAM = [
  {
    name: "Dr. G. Arulselvan",
    role: "Project Mentor",
    dept: "Assistant Professor & HOD / IT",
  },
  {
    name: "R. Brindha",
    role: "Team Member",
    dept: "3rd Year, Information Technology",
  },
  {
    name: "C. Banu",
    role: "Team Member",
    dept: "3rd Year, Information Technology",
  },
  {
    name: "R. Abinayaharini",
    role: "Team Member",
    dept: "3rd Year, Information Technology",
  },
];

const TECH = [
  {
    icon: Code2,
    label: "Frontend",
    value: "React 19 + TypeScript + Tailwind CSS",
  },
  { icon: BookOpen, label: "Routing", value: "TanStack Router" },
  { icon: Lightbulb, label: "Algorithm", value: "Dijkstra's Shortest Path" },
  {
    icon: GraduationCap,
    label: "Backend",
    value: "Motoko on Internet Computer",
  },
];

export default function About() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="bg-card border-b border-border py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-label text-accent">About This Project</p>
          <h1 className="text-h2 font-display text-foreground">
            Built for the campus community
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Campus Navigation System is a final-year academic project developed
            to solve a real problem: students and visitors struggling to locate
            buildings across a sprawling campus. We leverage Dijkstra's graph
            algorithm to compute the shortest walking paths between any two
            locations in real time.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-background py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h3 font-display text-foreground mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className="surface-card p-5 flex items-start gap-4"
                data-ocid={`about.tech_item.item.${i + 1}`}
              >
                <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/40 border-t border-border py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h3 font-display text-foreground mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map(({ name, role, dept }, i) => (
              <div
                key={name}
                className="surface-card p-5 text-center space-y-2"
                data-ocid={`about.team_member.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-display font-bold text-lg">
                  {name.charAt(0)}
                </div>
                <p className="font-display font-semibold text-foreground text-sm">
                  {name}
                </p>
                <p className="text-accent text-xs font-semibold">{role}</p>
                <p className="text-muted-foreground text-xs">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
