
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-heading font-bold text-primary">
          AD
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild>
            <a href="/Ahmed_Darwish_CV.pdf" download>Download CV</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg py-4 px-6 absolute top-full left-0 right-0 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-2">
                <a href="/Ahmed_Darwish_CV.pdf" download>Download CV</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
