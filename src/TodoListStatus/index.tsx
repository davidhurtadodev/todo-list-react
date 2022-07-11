import React from 'react';
import './TodoListStatus.css';

type TodoListStatusProps = {
  itemsLeft?: number;
};

const TodoListStatus = ({ itemsLeft }: TodoListStatusProps): JSX.Element => {
  return (
    <div className="container todo-list-status">
      <span className="todo-list-status__left">5 items left</span>
      <span className="todo-list-status__clear">Clear completed</span>
    </div>
  );
};

export default TodoListStatus;
