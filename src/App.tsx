import React from 'react';
import './App.css';
import Header from './Header';
import MainWrapper from './MainWrapper';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import './Container/Container.css';
import TodoNav from './TodoNav';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <CreateTodo />
        <TodoList />
        <TodoNav />
      </MainWrapper>
    </div>
  );
}

export default App;
