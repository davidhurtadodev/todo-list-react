import React from 'react';
import './App.css';
import Header from '../Header';
import MainWrapper from '../MainWrapper';
import CreateTodo from '../CreateTodo';
import TodoList from '../TodoList';
import TodoListStatus from '../TodoListStatus';
import TodoListDisplayOptions from '../TodoListDisplayOptions';

type AppUIProps = {
  theme: string;
  setTheme: (theme: string) => void;
  newTodoText: string;
  setNewTodoText: (text: string) => void;
  todos: { text: string; completed: boolean }[];
  setTodos: (todos: { text: string; completed: boolean }[]) => void;
  completeTodos: (text: string) => void;
  displayedTodos: string;
  uncompletedTodos: number;
  setDisplayedTodos: any;
  filterCompletedTodos: (
    todos: { text: string; completed: boolean }[]
  ) => { text: string; completed: boolean }[];
};

const AppUI = ({
  theme,
  setTheme,
  newTodoText,
  setNewTodoText,
  todos,
  setTodos,
  completeTodos,
  displayedTodos,
  uncompletedTodos,
  setDisplayedTodos,

  filterCompletedTodos,
}: AppUIProps): JSX.Element => {
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
          filterCompletedTodos={filterCompletedTodos}
          setTodos={setTodos}
        />
        <TodoListStatus
          uncompletedTodos={uncompletedTodos}
          setDisplayedTodos={setDisplayedTodos}
          todos={todos}
          setTodos={setTodos}
          displayedTodos={displayedTodos}
          filterCompletedTodos={filterCompletedTodos}
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

export default AppUI;
