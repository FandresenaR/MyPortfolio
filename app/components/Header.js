'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    if (href === '#contact') {
      e.preventDefault();
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/Logo.png" alt="Logo" width={80} height={80} className="mr-2" />
        </Link>
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16" />
          </svg>
        </button>
        <ul className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-16 md:top-auto left-0 right-0 md:left-auto md:right-auto bg-gray-800 md:bg-transparent py-2 md:py-0 space-y-2 md:space-y-0 md:space-x-4 z-50 transition-all duration-300 ease-in-out`}>
          {navItems.map(({ href, label }) => (
            <li key={href} className="w-full text-center py-2 md:py-0">
              <Link
                href={href}
                className={`hover:text-gray-300 hover:underline block ${
                  pathname === href ? 'text-[#50C878]' : ''
                }`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;