import React from 'react';
import './ModeToggler.css';
import moonIcon from '../assets/icons/icon-moon.svg';
import sunIcon from '../assets/icons/icon-sun.svg';

type ModeTogglerProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ModeToggler = ({ theme, setTheme }: ModeTogglerProps): JSX.Element => {
  const switchTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className="mode-toggler" onClick={switchTheme}>
      <img
        className="mode-toggler__img"
        src={theme === 'light' ? moonIcon : sunIcon}
        alt="toggler"
      />
    </div>
  );
};

export default ModeToggler;
