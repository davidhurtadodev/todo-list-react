import React from 'react';
import './TodoListDisplayOptions.css';

type TodoListDisplayOptionsProps = {
  displayedTodos: string;
  setDisplayedTodos: any;
  responsiveClass: string;
};

const TodoListDisplayOptions = ({
  displayedTodos,
  setDisplayedTodos,
  responsiveClass,
}: TodoListDisplayOptionsProps): JSX.Element => {
  return (
    <div className={`container__status-navbar container ${responsiveClass}`}>
      <span
        className={
          displayedTodos === 'All'
            ? 'todo-nav__text todo-nav__text--left todo-nav__text--active'
            : 'todo-nav__text todo-nav__text--left'
        }
        onClick={(e) =>
          setDisplayedTodos((e.target as HTMLElement).textContent)
        }
      >
        All
      </span>
      <span
        className={
          displayedTodos === 'Active'
            ? 'todo-nav__text todo-nav__text--active'
            : 'todo-nav__text'
        }
        onClick={(e) =>
          setDisplayedTodos((e.target as HTMLElement).textContent)
        }
      >
        Active
      </span>
      <span
        className={
          displayedTodos === 'Complete'
            ? 'todo-nav__text todo-nav__text--right todo-nav__text--active'
            : 'todo-nav__text todo-nav__text--right '
        }
        onClick={(e) =>
          setDisplayedTodos((e.target as HTMLElement).textContent)
        }
      >
        Complete
      </span>
    </div>
  );
};

export default TodoListDisplayOptions;
