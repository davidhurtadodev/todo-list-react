import React from 'react';
import './TodoNavMobile.css';

type TodoNavMobileProps = {
  setDisplayedTodos: any;
};

const TodoNavMobile = ({
  setDisplayedTodos,
}: TodoNavMobileProps): JSX.Element => {
  return (
    <div className="container container__status-navbar todo-nav hide-desktop">
      <span className="todo-nav__text hide-mobile">5 items left</span>
      <div className="container__status-navbar">
        <span
          className="todo-nav__text"
          onClick={(e) =>
            setDisplayedTodos((e.target as HTMLElement).textContent)
          }
        >
          All
        </span>
        <span
          className="todo-nav__text"
          onClick={(e) =>
            setDisplayedTodos((e.target as HTMLElement).textContent)
          }
        >
          Active
        </span>
        <span
          className="todo-nav__text"
          onClick={(e) =>
            setDisplayedTodos((e.target as HTMLElement).textContent)
          }
        >
          Complete
        </span>
      </div>
      <span className="todo-nav__text hide-mobile">Clear Completed</span>
    </div>
  );
};

export default TodoNavMobile;
