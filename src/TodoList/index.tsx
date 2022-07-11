import React from 'react';
import Todo from '../Todo/index';
import './TodoList.css';

type todoListProps = {
  todosInProgress: [];
};

const TodoList = (): JSX.Element => {
  return (
    <div className="todo-list">
      <Todo todoText={'Lorem ipsum'} completed={false} />
      <Todo todoText={'Lorem ipsum'} completed={false} />
      <Todo todoText={'Lorem ipsum'} completed={false} />
    </div>
  );
};

export default TodoList;
