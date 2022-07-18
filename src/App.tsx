import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Header from './Header';
import MainWrapper from './MainWrapper';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import TodoListStatus from './TodoListStatus';
import TodoNavMobile from './TodoNavMobile';
import TodoListDisplayOptions from './TodoListDisplayOptions';
//TODO Revisar colores dark mode

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
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

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
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
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
      </MainWrapper>
    </div>
  );
};

export default App;
