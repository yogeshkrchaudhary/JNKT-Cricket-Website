import React, { useEffect, useState } from 'react';

const ScrollHandler = () => {
  const [activeSection, setActiveSection] = useState('');
  const [stickyHeader, setStickyHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      const scrollY = window.scrollY;

      sections.forEach(sec => {
        const top = scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(id)) {
              link.classList.add('active');
            }
          });
        }
      });

      setStickyHeader(scrollY > 100);
      setMenuOpen(false); // Close menu on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${stickyHeader ? 'sticky' : ''}`}>
      {/* Your header content */}
    </header>
  );
};

export default ScrollHandler;
    