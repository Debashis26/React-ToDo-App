import React, { useState } from "react";
import "./TodoItem.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodo, RemoveTodo, UpdateTodo, ToggleTodo } from "../types";

interface TodoItemProps {
  removeTodo: RemoveTodo;
  updateTodo: UpdateTodo;
  toggleTodo: ToggleTodo;
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({
  removeTodo,
  todo,
  updateTodo,
  toggleTodo,
}) => {
  const [mode, setMode] = useState(false);
  const [updateTask, setUpdateTask] = useState(todo.task);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!updateTask || /^\s*$/.test(updateTask)) return;
    updateTodo(todo.id, updateTask);
    setMode(!mode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTask(e.target.value);
  };

  let result: JSX.Element;
  if (mode) {
    result = (
      <CSSTransition key="editing" timeout={500} classNames="form">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input
            type="text"
            value={updateTask}
            name="task"
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </CSSTransition>
    );
  } else {
    result = (
      <CSSTransition key="normal" timeout={500} classNames="task-text">
        <li className="Todo-task" onClick={() => toggleTodo(todo.id)}>
          {todo.task}
        </li>
      </CSSTransition>
    );
  }

  return (
    <TransitionGroup className={todo.completed ? "Todo completed" : "Todo"}>
      {result}
      <CSSTransition timeout={500}>
        <div className="Todo-buttons">
          <button onClick={() => setMode(!mode)}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={() => removeTodo(todo.id)}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default TodoItem;
