import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About Us", href: "#" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      <header className="absolute bg-[#FFF2E1] dark:bg-slate-900 top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
          <motion.a 
            href="/" 
            className="relative flex items-center ml-2 sm:ml-4 md:ml-6 lg:ml-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-[#23BDEE] rounded-lg rotate-45 flex-shrink-0 z-10" />
            <span className="-ml-8 text-2xl font-bold text-slate-900 dark:text-white z-20 transition-colors duration-300">Skilline</span>
          </motion.a>

          <nav className="hidden lg:flex items-center space-x-[60px]">
            {navLinks.map((link, index) => (
              <motion.a
                href={link.href}
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="text-base font-medium text-[#696984] dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <motion.a
              href="#"
              className="rounded-full border-2 px-8 py-3 text-base font-medium transition-colors duration-300 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-slate-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.a>
            <motion.a
              href="#"
              className="rounded-full bg-orange-500 px-8 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 dark:text-white p-2 relative z-50"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Panel */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#FFF2E1] dark:bg-slate-900/95 backdrop-blur-sm lg:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-full flex flex-col">
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {navLinks.map((link, index) => (
              <motion.a
                href={link.href}
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  handleScroll(link.href);
                }}
                className="text-2xl font-medium text-[#696984] dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}

            <div className="flex flex-col items-center gap-6 pt-4">
              <motion.a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border-2 border-orange-500 px-12 py-3 text-lg font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.a>
              <motion.a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-orange-500 px-12 py-3 text-lg font-medium text-white transition-colors duration-300 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;