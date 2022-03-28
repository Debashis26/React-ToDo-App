import React, { useState } from 'react';
import './TodoForm.css';
import { AddTodo } from '../types';

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) return;
    addTodo({ id: Date.now(), task: task, completed: false });
    setTask('');
  };

  return (
    <form className='NewTodoForm' onSubmit={handleSubmit}>
      <label htmlFor='task'>New Todo</label>
      <input type='text' placeholder='New Todo' name='task' value={task} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
};
export default TodoForm;
