import React from 'react';
import checkSvg from '../assets/icons/icon-check.svg';
import './CreateTodo.css';

type CreateTodoProps = {
  newTodoText: string;
  setNewTodoText: any;
};

const CreateTodo = ({
  newTodoText,
  setNewTodoText,
}: CreateTodoProps): JSX.Element => {
  return (
    <div className="container container--create create-todo">
      <span className="container__check-circle">
        <img src={checkSvg} className="check-circle__check" alt="" />
      </span>
      <form action="">
        <input
          type="text"
          className="container__text--create container__text input--create"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
        />
      </form>
    </div>
  );
};
export default CreateTodo;
