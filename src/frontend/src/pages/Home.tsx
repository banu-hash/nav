import { Button } from "@/components/AppButton";
import { Link } from "@tanstack/react-router";
import { Building2, MapPin, Navigation, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Navigation,
    title: "Shortest Path",
    desc: "Dijkstra's algorithm finds the optimal route between any two campus locations instantly.",
  },
  {
    icon: Building2,
    title: "All Buildings",
    desc: "Every major campus building is mapped — from the Main Gate to the Hostel block.",
  },
  {
    icon: Users,
    title: "For Everyone",
    desc: "Designed for students, staff, and first-time visitors alike. No sign-in required.",
  },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="bg-card border-b border-border py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-semibold font-display">
            <MapPin className="w-3.5 h-3.5" />
            University Campus
          </div>
          <h1 className="text-hero text-foreground font-display">
            Campus Navigation <span className="text-primary">System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find the shortest path between any two buildings on campus in
            seconds. Powered by Dijkstra's Algorithm for precise, efficient
            routing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link to="/map">
              <Button
                size="lg"
                variant="primary"
                data-ocid="home.find_route_cta"
              >
                <Navigation className="w-5 h-5" />
                Find Your Route
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="secondary"
                data-ocid="home.learn_more_cta"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-label text-accent mb-2">Why CampusNav</p>
            <h2 className="text-h2 text-foreground font-display">
              Navigate smarter, not harder
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="surface-card p-6 space-y-4 hover:shadow-md transition-smooth"
                data-ocid={`home.feature_card.item.${i + 1}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-muted/40 border-t border-border py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-h2 font-display text-foreground">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground">
            Open the interactive map and find your way around campus in seconds.
          </p>
          <Link to="/map">
            <Button
              size="lg"
              variant="accent"
              className="mt-2"
              data-ocid="home.explore_map_cta"
            >
              <MapPin className="w-5 h-5" />
              Open Campus Map
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
