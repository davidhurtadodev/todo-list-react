import React from 'react';
import checkSvg from '../assets/icons/icon-check.svg';
import './CreateTodo.css';

type CreateTodoProps = {
  newTodoText: string;
  setNewTodoText: any;
  todos: { text: string; completed: boolean }[];
  setTodos: any;
};

const CreateTodo = ({
  newTodoText,
  setNewTodoText,
  todos,
  setTodos,
}: CreateTodoProps): JSX.Element => {
  const handleEnterPress = (e: any): void => {
    if (e.code === 'Enter') {
      e.preventDefault();
      const newTodo = {
        text: newTodoText,
        completed: false,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setNewTodoText('');
    }
  };
  return (
    <div className="container container--create create-todo">
      <span className="container__check-circle container__check-circle--create">
        <img src={checkSvg} className="check-circle__check" alt="" />
      </span>
      <form action="">
        <input
          type="text"
          className="container__text--create container__text input--create"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
          onKeyPress={(e) => handleEnterPress(e)}
        />
      </form>
    </div>
  );
};
export default CreateTodo;
