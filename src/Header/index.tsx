import React from 'react';
import ModeToggler from '../ModeToggler';

import './Header.css';

type HeaderProps = {
  theme: string;
  setTheme: any;
};

const Header = ({ theme, setTheme }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <h1 className="header__title">todo</h1>
        <ModeToggler theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
