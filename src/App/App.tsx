import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import AppUI from './AppUI';

const App = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const [newTodoText, setNewTodoText] = useState<string>('');
  const [todos, setTodos] = useLocalStorage<
    { text: string; completed: boolean }[]
  >('todos', []);
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
  const filterCompletedTodos = (
    todos: { text: string; completed: boolean }[]
  ) =>
    todos.filter((todo) => {
      if (!todo.completed) return todo;
    });

  return (
    <AppUI
      theme={theme}
      setTheme={setTheme}
      newTodoText={newTodoText}
      displayedTodos={displayedTodos}
      setDisplayedTodos={setDisplayedTodos}
      uncompletedTodos={uncompletedTodos}
      completeTodos={completeTodos}
      todos={todos}
      setTodos={setTodos}
      setNewTodoText={setNewTodoText}
      filterCompletedTodos={filterCompletedTodos}
    />
  );
};

export default App;
