import React from 'react';
import './TodoNavMobile.css';

const TodoNavMobile = (): JSX.Element => {
  return (
    <div className="container todo-nav hide-desktop">
      <span className="todo-nav__text hide-mobile">5 items left</span>
      <div className="container__status-navbar">
        <span className="todo-nav__text">All</span>
        <span className="todo-nav__text">Active</span>
        <span className="todo-nav__text">Complete</span>
      </div>
      <span className="todo-nav__text hide-mobile">Clear Completed</span>
    </div>
  );
};

export default TodoNavMobile;
