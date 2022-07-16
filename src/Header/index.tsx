import React from 'react';
import ModeToggler from '../ModeToggler';

import './Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <h1 className="header__title">todo</h1>
        <ModeToggler />
      </div>
    </header>
  );
};

export default Header;
