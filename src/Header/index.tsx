import React, { useState } from 'react';
import ModeToggler from '../ModeToggler';
import bgDesktopDark from '../assets/backgrounds/bg-desktop-dark.jpg';
import bgDesktopLight from '../assets/backgrounds/bg-desktop-light.jpg';
import bgMobileDark from '../assets/backgrounds/bg-mobile-dark.jpg';
import bgMobileLight from '../assets/backgrounds/bg-mobile-light.jpg';

import './Header.css';

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const Header = ({ theme, setTheme }: HeaderProps): JSX.Element => {
  let backgroundTest;

  if (window.innerWidth >= 992 && theme === 'dark')
    backgroundTest = bgDesktopDark;
  else if (window.innerWidth >= 992 && theme === 'light')
    backgroundTest = bgDesktopLight;
  else if (window.innerWidth < 992 && theme === 'light')
    backgroundTest = bgMobileLight;
  else if (window.innerWidth < 992 && theme === 'dark')
    backgroundTest = bgMobileDark;
  // const background = (theme: string): any => {
  //   const imageSize = window.innerWidth >= 992 ? 'Desktop' : 'Mobile';

  //   // return `bg${imageSize}${
  //   //   theme[0].toUpperCase() + theme.slice(1).toLowerCase()
  //   // }`;
  //   const bgVariable = `bg${imageSize}${
  //     theme[0].toUpperCase() + theme.slice(1).toLowerCase()
  //   }`;
  //   return bgVariable;
  // };
  // const backgroundTest = background(theme);

  return (
    <header
      className="header"
      style={{ backgroundImage: 'url(' + backgroundTest + ')' }}
    >
      <div className="header__inner-wrapper">
        <h1 className="header__title">todo</h1>
        <ModeToggler theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
