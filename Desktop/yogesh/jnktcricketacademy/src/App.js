import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import MenuIcon from './MenuIcon';
import ScrollHandler from './ScrollHandler';

const App = () => {
  return (
    <div className="App">
      <MenuIcon />
      {/* <SwiperSection /> */}
      <ScrollHandler />
      <DarkModeToggle />
      {/* Other content */}
    </div>
  );
};

export default App;
