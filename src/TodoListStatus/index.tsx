import React from 'react';
import './TodoListStatus.css';

type TodoListStatusProps = {
  uncompletedTodos?: number;
};

const TodoListStatus = ({
  uncompletedTodos,
}: TodoListStatusProps): JSX.Element => {
  return (
    <div className="container todo-list-status todo-list-status__left">
      <span className="todo-nav__text ">{uncompletedTodos} items left</span>
      <div className="container__status-navbar hide-mobile">
        <span className="todo-nav__text">All</span>
        <span className="todo-nav__text">Active</span>
        <span className="todo-nav__text">Complete</span>
      </div>
      <span className="todo-nav__text todo-list-status__clear">
        Clear Completed
      </span>
    </div>
  );
};

export default TodoListStatus;
