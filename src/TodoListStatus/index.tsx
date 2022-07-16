import React from 'react';
import './TodoListStatus.css';
import TodoListDisplayOptions from '../TodoListDisplayOptions';

type TodoListStatusProps = {
  uncompletedTodos: number;
  setDisplayedTodos: any;
  todos: { text: string; completed: boolean }[];
  setTodos: any;
  displayedTodos: string;
};

const TodoListStatus = ({
  uncompletedTodos,
  setDisplayedTodos,
  displayedTodos,
  todos,
  setTodos,
}: TodoListStatusProps): JSX.Element => {
  const handleClearCompleted = (): void => {
    const filterCompletedTodos = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });
    setTodos(filterCompletedTodos);
  };

  return (
    <div className="container todo-list-status todo-list-status__left">
      <span className="todo-nav__text ">{uncompletedTodos} items left</span>
      {/* <div className="container__status-navbar hide-mobile">
        <span
          className={
            displayedTodos === 'All'
              ? 'todo-nav__text todo-nav__text--active'
              : 'todo-nav__text'
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
              ? 'todo-nav__text todo-nav__text--active'
              : 'todo-nav__text'
          }
          onClick={(e) =>
            setDisplayedTodos((e.target as HTMLElement).textContent)
          }
        >
          Complete
        </span>
      </div> */}
      <TodoListDisplayOptions
        responsiveClass="hide-mobile"
        displayedTodos={displayedTodos}
        setDisplayedTodos={setDisplayedTodos}
      />
      <span
        className="todo-nav__text todo-list-status__clear"
        onClick={() => handleClearCompleted()}
      >
        Clear Completed
      </span>
    </div>
  );
};

export default TodoListStatus;
