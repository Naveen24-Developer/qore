
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../assets/QORE-Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="QORE Logo" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 ${
                    isActive ? "text-white" : "text-secondary-gray hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-green glow-green"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-none bg-transparent overflow-hidden transition-all duration-300 hover:border-accent-green"
            >
              <span className="relative z-10 flex items-center gap-1.5 text-white transition-colors duration-300 group-hover:text-black font-semibold">
                START A PROJECT
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 z-0 bg-accent-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex p-2 text-white hover:text-accent-green transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-28 px-8 flex flex-col justify-between pb-12 overflow-y-auto"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-accent-green/5 blur-3xl pointer-events-none" />

            {/* Navigation links inside menu */}
            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-[10px] tracking-[0.3em] font-mono text-secondary-gray uppercase mb-2">
                NAVIGATION
              </span>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-3xl font-display font-medium tracking-tight uppercase flex items-center justify-between ${
                        isActive ? "text-accent-green" : "text-white"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-40 hover:opacity-100 transition-opacity" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer/Action */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="h-[1px] bg-white/10 w-full" />
              <Link
                to="/contact"
                className="w-full text-center group relative inline-flex items-center justify-center py-4 text-sm font-semibold tracking-widest uppercase border border-accent-green bg-transparent overflow-hidden"
              >
                <span className="relative z-10 text-accent-green transition-colors duration-300 group-hover:text-black">
                  START A PROJECT
                </span>
                <div className="absolute inset-0 z-0 bg-accent-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>

              <div className="flex items-center justify-between text-xs text-secondary-gray font-mono mt-2">
                <span>hello@qorestudio.com</span>
                <span>@qore.jpg</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
