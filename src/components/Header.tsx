
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Assuming shadcn/ui
import React from "react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="container-max section-padding !py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-heading text-[hsl(var(--theme-primary))]">
          Jayita Maji
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-[hsl(var(--theme-primary))] ${
                  isActive ? "text-[hsl(var(--theme-primary))]" : "text-[hsl(var(--theme-text))]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 text-[hsl(var(--theme-text))]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-[hsl(var(--theme-bg-start))]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors hover:text-[hsl(var(--theme-primary))] ${
                        isActive ? "text-[hsl(var(--theme-primary))]" : "text-[hsl(var(--theme-text))]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
