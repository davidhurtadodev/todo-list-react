import React from 'react';
import Todo from '../Todo/index';
import './TodoList.css';

// type todosProps = {
//   todos: []

// }

const TodoList = ({ todos, completeTodos }: any): JSX.Element => {
  return (
    <div className="todo-list">
      {/* <Todo todoText={'Lorem ipsum'} completed={false} />
      <Todo todoText={'Lorem ipsum'} completed={false} />
     <Todo todoText={'Lorem ipsum'} completed={false} /> */}
      {todos.map(({ text, completed }: any) => {
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
