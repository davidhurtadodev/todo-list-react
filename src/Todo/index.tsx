import React from 'react';
import './Todo.css';
import checkSvg from '../assets/icons/icon-check.svg';

type todoProps = {
  completed: boolean;
  text: string;
  completeTodos: any;
};

const Todo = ({ completed, text, completeTodos }: todoProps): JSX.Element => {
  return (
    <div className="container todo">
      <span
        onClick={() => completeTodos(text)}
        className={
          completed
            ? 'container__check-circle container__check-circle--checked'
            : 'container__check-circle'
        }
      >
        {completed ? (
          <img src={checkSvg} className="check-circle__check" alt="" />
        ) : (
          ''
        )}
      </span>
      <span
        className={
          completed ? 'todo__text todo__text--completed' : 'todo__text'
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Todo;
