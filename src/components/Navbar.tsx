import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'F.A.I.R.', href: '#fair' },
    { name: 'Issues', href: '#issues' },
    { name: 'Events', href: '#events' },
    { name: 'Policy', href: '#policy' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-campaign-blue text-white shadow-xl border-b-4 border-campaign-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-display font-bold uppercase tracking-wider hover:text-campaign-red transition-colors">
              Damita <span className="text-campaign-red">Bishop</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-sm text-sm lg:text-base font-bold uppercase tracking-wide hover:bg-campaign-red hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-campaign-red text-white rounded-sm text-sm lg:text-base font-bold uppercase tracking-wide hover:bg-red-800 transition-colors shadow-md"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-sm text-white hover:text-campaign-blue hover:bg-white focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-campaign-blue border-t border-white/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-sm text-base font-bold uppercase tracking-wide hover:bg-campaign-red hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 mt-4 bg-campaign-red text-white rounded-sm text-base font-bold uppercase tracking-wide hover:bg-red-800 transition-colors text-center shadow-md"
              >
                Donate / Volunteer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
