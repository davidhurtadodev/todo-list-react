import React from 'react';
import Todo from '../Todo/index';
import './TodoList.css';

// type todosProps = {
//   todos: []

// }

const TodoList = ({
  todos,
  completeTodos,
  displayedTodos,
}: any): JSX.Element => {
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
              />
            );
          })
        : todos.map(({ text, completed }: any) => {
            return (
              <Todo
                text={text}
                completed={completed}
                completeTodos={completeTodos}
              />
            );
          })}
    </div>
  );
};

export default TodoList;
