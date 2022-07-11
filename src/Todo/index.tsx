import React from 'react';
import './Todo.css';
import checkSvg from '../assets/icons/icon-check.svg';

type todoProps = {
  completed: boolean;
  todoText: string;
};

const Todo = ({ completed, todoText }: todoProps): JSX.Element => {
  return (
    <div className="container todo">
      <span className="container__check-circle">
        <img src={checkSvg} className="check-circle__check" alt="" />
      </span>
      <span className="todo__text">{todoText}</span>
    </div>
  );
};

export default Todo;
