import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import MainWrapper from './MainWrapper';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import TodoListStatus from './TodoListStatus';
import TodoNavMobile from './TodoNavMobile';
import TodoListDisplayOptions from './TodoListDisplayOptions';

const defaultTodos: { text: string; completed: boolean }[] = [
  {
    text: 'Cortar cebolla',
    completed: false,
  },
  {
    text: 'Dormir',
    completed: false,
  },
  {
    text: 'Volar',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [todos, setTodos] =
    useState<{ text: string; completed: boolean }[]>(defaultTodos);
  const [displayedTodos, setDisplayedTodos] = useState<string>('All');

  const completedTodos: number = todos.filter(
    (todo) => !!todo.completed
  ).length;
  const totalTodos: number = todos.length;
  const uncompletedTodos: number = totalTodos - completedTodos;

  const completeTodos = (text: string): void => {
    const todoIndex: number = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <CreateTodo
          newTodoText={newTodoText}
          setNewTodoText={setNewTodoText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          completeTodos={completeTodos}
          displayedTodos={displayedTodos}
        />
        <TodoListStatus
          uncompletedTodos={uncompletedTodos}
          setDisplayedTodos={setDisplayedTodos}
          todos={todos}
          setTodos={setTodos}
          displayedTodos={displayedTodos}
        />
        <TodoListDisplayOptions
          responsiveClass="hide-desktop"
          displayedTodos={displayedTodos}
          setDisplayedTodos={setDisplayedTodos}
        />
        {/* <TodoNavMobile setDisplayedTodos={setDisplayedTodos} /> */}
      </MainWrapper>
    </div>
  );
};

export default App;
