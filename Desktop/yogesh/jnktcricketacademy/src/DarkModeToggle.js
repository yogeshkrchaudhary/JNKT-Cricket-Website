import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <i
        id="darkMode-icon"
        className={`dark-mode-icon ${darkMode ? 'bx-sun' : ''}`}
        onClick={toggleDarkMode}
      >
        {/* Add your icon here */}
      </i>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        {/* Your app content */}
      </div>
    </div>
  );
};

export default DarkModeToggle;
