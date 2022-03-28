import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';
import { initialTodos } from '../initialTodos';
import { AddTodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const add: AddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove: RemoveTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  const update: UpdateTodo = (id, values) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          id: Date.now(),
          task: values,
          completed: false
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggle: ToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const tod = todos.map((todo) => {
    return (
      <CSSTransition key={todo.id} timeout={500} classNames='todo'>
        <TodoItem todo={todo} removeTodo={remove} updateTodo={update} toggleTodo={toggle} />
      </CSSTransition>
    );
  });

  return (
    <div className='TodoList'>
      <h1>
        Get To Work! <span>An Animated Todo List Made With React Hooks.</span>
      </h1>
      <TodoForm addTodo={add} />
      <ul>
        {todos.length > 0 ? (
          <TransitionGroup className='todo-list'>{tod}</TransitionGroup>
        ) : (
          <h4>No Todos!</h4>
        )}
      </ul>
    </div>
  );
};
export default TodoList;
