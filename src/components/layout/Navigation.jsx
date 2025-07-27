import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About Us", href: "#" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="absolute bg-[#FFF2E1]  top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
          {/* Logo */}
      <a href="/" className="relative flex items-center ml-2 sm:ml-4 md:ml-6 lg:ml-10">

  <div className="w-10 h-10 bg-[#23BDEE] rounded-lg rotate-45 flex-shrink-0 z-10" />
  <span className="-ml-8 text-2xl font-bold text-dark-navy z-20">Skilline</span>
</a>

       
          <nav className="hidden lg:flex items-center space-x-[60px]">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="text-base font-medium text-[#696984] hover:text-dark-navy transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="rounded-full border-2 border-orange px-8 py-3 text-base font-medium text-orange transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-full bg-orange-500 px-8 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-orange/90"
            >
              Sign Up
            </a>
          </div>

       
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-navy p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>
     
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-sm lg:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 h-full">
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="text-dark-navy p-2"
              aria-label="Close menu"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  handleScroll(link.href);
                }}
                className="text-2xl font-medium text-[#696984] hover:text-dark-navy transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col items-center gap-6 pt-4">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border-2 border-orange px-12 py-3 text-lg font-medium text-orange transition-colors duration-300 hover:bg-orange hover:text-white"
              >
                Login
              </a>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-orange px-12 py-3 text-lg font-medium text-white transition-colors duration-300 hover:bg-orange/90"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
