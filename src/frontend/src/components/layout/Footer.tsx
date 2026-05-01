import { MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-display font-semibold text-sm">
              Campus Navigation System
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            EGS Pillay Engineering College &mdash; Helping you navigate with confidence
          </p>

          <p className="text-muted-foreground text-xs">
            &copy; {year}. Campus Navigator Project | Developed by our team
          </p>

        </div>
      </div>
    </footer>
  );
}
