import { Link } from "react-router";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Bhaskar Classes
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering students with quality mathematics education for academic excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }}>
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">Class 9 Maths</li>
              <li className="text-white/80 text-sm">Class 10 Maths</li>
              <li className="text-white/80 text-sm">Class 11 Maths</li>
              <li className="text-white/80 text-sm">Class 12 Maths</li>
              <li className="text-white/80 text-sm">IIT-JEE Maths</li>
              <li className="text-white/80 text-sm">BTech Maths</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                <span className="text-white/80 text-sm">
                  123 Education Street, Learning City, IN 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/80" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/80" />
                <a href="mailto:info@bhaskarclasses.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  info@bhaskarclasses.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Bhaskar Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
