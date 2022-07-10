import React from 'react';
import Todo from '../Todo';
import './MainWrapper.css';
// import Container from '../Container';
import TodoList from '../TodoList';
import CreateTodo from '../CreateTodo';

type MainWrapperProps = {
  children: React.ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => {
  return <div className="main-wrapper">{children}</div>;
};

export default MainWrapper;
