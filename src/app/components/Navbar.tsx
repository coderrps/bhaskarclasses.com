import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Bhaskar Classes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#111827] hover:text-[#1E3A8A] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book Demo Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#ea6c0f] transition-colors font-medium"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#111827]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#111827] hover:text-[#1E3A8A] transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#ea6c0f] transition-colors font-medium text-center"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
