import React from 'react';
import './Todo.css';

type todoProps = {
  create: boolean;
};

const Todo = ({ create }: todoProps): JSX.Element => {
  return <div className={create ? 'todo todo--factory' : 'factory'}></div>;
};

export default Todo;
