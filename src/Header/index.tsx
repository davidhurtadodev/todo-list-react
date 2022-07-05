import React, {FC} from 'react';
import ModeToggler from '../ModeToggler';

interface HeaderProps {
    title: string:
}

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">todo</h1>
      <ModeToggler />
    </header>
  );
};

export default Header;
