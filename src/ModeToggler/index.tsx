import React from 'react';
import './ModeToggler.css';
import moonIcon from '../assets/icons/icon-moon.svg';

const ModeToggler = (): JSX.Element => {
  return (
    <div className="mode-toggler">
      <img className="mode-toggler__img" src={moonIcon} alt="toggler" />
    </div>
  );
};

export default ModeToggler;
