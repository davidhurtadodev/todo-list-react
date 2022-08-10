import React from 'react';
import Todo from '../Todo/index';
import './TodoList.css';

type TodoListProps = {
  todos: { text: string; completed: boolean }[];
  setTodos: (todos: { text: string; completed: boolean }[]) => void;
  completeTodos: (text: string) => void;
  displayedTodos: string;
  filterCompletedTodos: (
    todos: { text: string; completed: boolean }[]
  ) => { text: string; completed: boolean }[];
};

const TodoList = ({
  todos,
  completeTodos,
  displayedTodos,
  filterCompletedTodos,
  setTodos,
}: TodoListProps): JSX.Element => {
  const filteredTodos = todos.filter((todo: any) => {
    if (todo.completed === false && displayedTodos === 'Active') return todo;
    else if (todo.completed === true && displayedTodos === 'Complete')
      return todo;
  });

  return (
    <div className="todo-list">
      {displayedTodos !== 'All'
        ? filteredTodos.map(({ text, completed }: any) => {
            return (
              <Todo
                text={text}
                completed={completed}
                completeTodos={completeTodos}
                todos={todos}
                key={text}
                setTodos={setTodos}
              />
            );
          })
        : todos.map(({ text, completed }: any) => {
            return (
              <Todo
                text={text}
                completed={completed}
                completeTodos={completeTodos}
                todos={todos}
                key={text}
                setTodos={setTodos}
              />
            );
          })}
    </div>
  );
};

export default TodoList;
