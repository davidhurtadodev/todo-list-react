import React from 'react';
import './Todo.css';
import checkSvg from '../assets/icons/icon-check.svg';
import crossIcon from '../assets/icons/icon-cross.svg';

type todoProps = {
  completed: boolean;
  text: string;
  completeTodos: any;
  filterCompletedTodos: any;
  todos: any;
  setTodos: any;
};

const Todo = ({
  completed,
  text,
  completeTodos,
  filterCompletedTodos,
  todos,
  setTodos,
}: todoProps): JSX.Element => {
  const handleCrossClick = () => {
    if (!completed) {
      completeTodos(text);
      setTodos(filterCompletedTodos(todos));
    } else setTodos(filterCompletedTodos(todos));
  };
  return (
    <div className="container todo">
      <div className="todo__left-wrapper">
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
      <div className="todo__right-wrapper">
        <img
          src={crossIcon}
          className="todo__cross"
          alt=""
          onClick={() => handleCrossClick()}
        />
      </div>
    </div>
  );
};

export default Todo;
