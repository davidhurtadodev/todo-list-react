import React from 'react';
import './TodoListStatus.css';

type TodoListStatusProps = {
  uncompletedTodos: number;
  setDisplayedTodos: any;
};

const TodoListStatus = ({
  uncompletedTodos,
  setDisplayedTodos,
}: TodoListStatusProps): JSX.Element => {
  return (
    <div className="container todo-list-status todo-list-status__left">
      <span className="todo-nav__text ">{uncompletedTodos} items left</span>
      <div className="container__status-navbar hide-mobile">
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
      <span className="todo-nav__text todo-list-status__clear">
        Clear Completed
      </span>
    </div>
  );
};

export default TodoListStatus;
