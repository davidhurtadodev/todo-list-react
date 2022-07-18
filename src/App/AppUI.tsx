import React from 'react';
import './App.css';
import Header from '../Header';
import MainWrapper from '../MainWrapper';
import CreateTodo from '../CreateTodo';
import TodoList from '../TodoList';
import TodoListStatus from '../TodoListStatus';
import TodoNavMobile from '../TodoNavMobile';
import TodoListDisplayOptions from '../TodoListDisplayOptions';

type AppUIProps = {
  theme: string;
  setTheme: any;
  completedTodos: number;
  newTodoText: any;
  setNewTodoText: any;
  todos: { text: string; completed: boolean }[];
  setTodos: any;
  completeTodos: any;
  displayedTodos: string;
  uncompletedTodos: number;
  setDisplayedTodos: any;
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
  completedTodos,
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

export default AppUI;
