import React from 'react';
import TodoListDisplayOptions from '../TodoListDisplayOptions';
import './TodoListStatus.css';

type TodoListStatusProps = {
  uncompletedTodos: number;
  setDisplayedTodos: any;
  todos: { text: string; completed: boolean }[];
  setTodos: (todos: { text: string; completed: boolean }[]) => void;
  displayedTodos: string;
  filterCompletedTodos: (
    todos: { text: string; completed: boolean }[]
  ) => { text: string; completed: boolean }[];
};

const TodoListStatus = ({
  uncompletedTodos,
  setDisplayedTodos,
  displayedTodos,
  todos,
  setTodos,
  filterCompletedTodos,
}: TodoListStatusProps): JSX.Element => {
  const handleClearCompleted = (): void => {
    const filteredCompletedTodos = filterCompletedTodos(todos);
    setTodos(filteredCompletedTodos);
  };

  return (
    <div className="container todo-list-status todo-list-status__left">
      <span className="todo-nav__text todo-list-status__text">
        {uncompletedTodos} items left
      </span>
      <TodoListDisplayOptions
        responsiveClass="hide-mobile"
        displayedTodos={displayedTodos}
        setDisplayedTodos={setDisplayedTodos}
      />
      <span
        className="todo-nav__text todo-list-status__text todo-list-status__clear"
        onClick={() => handleClearCompleted()}
      >
        Clear Completed
      </span>
    </div>
  );
};

export default TodoListStatus;
