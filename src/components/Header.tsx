
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
      <div className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold font-heading gradient-text">
          Jayita Maji
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-[hsl(var(--theme-primary))] ${
                  isActive ? "text-[hsl(var(--theme-primary))]" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
              <nav className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors hover:text-[hsl(var(--theme-primary))] text-center ${
                        isActive ? "text-[hsl(var(--theme-primary))]" : "text-gray-700 dark:text-gray-300"
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
