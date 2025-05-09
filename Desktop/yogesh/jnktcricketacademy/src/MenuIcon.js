import React, { useState } from 'react';

const MenuIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <i
        id="menu-icon"
        className={`menu-icon ${menuOpen ? 'bx-x' : ''}`}
        onClick={toggleMenu}
      >
        {/* Add your icon here */}
      </i>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        {/* Your Navbar Content */}
      </nav>
    </div>
  );
};

export default MenuIcon;
