import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from '../../components/TodoItem';

const mockTodo = {
  id: 1,
  task: 'Example Task',
  completed: false,
};

const mockRemoveTodo = jest.fn();
const mockUpdateTodo = jest.fn();
const mockToggleTodo = jest.fn();

const setup = (customProps = {}) => {
  const props = {
    removeTodo: mockRemoveTodo,
    updateTodo: mockUpdateTodo,
    toggleTodo: mockToggleTodo,
    todo: { ...mockTodo, ...customProps },
  };

  const utils = render(<TodoItem {...props} />);
  return { ...utils, props };
};

describe('Testing TodoItem Component', () => {
  it('Should renders correctly', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should renders task text when not in edit mode', () => {
    const { getByText } = setup();    
    expect(getByText(mockTodo.task)).toBeInTheDocument();
  });

  it('Should toggles edit mode when edit button is clicked', () => {
    const { getByTestId } = setup();
    fireEvent.click(getByTestId('edit'));
    expect(mockUpdateTodo).not.toHaveBeenCalled(); // Ensure updateTodo is not called immediately
  });

  it('Should calls updateTodo when form is submitted with a new task', () => {
    const { getByTestId, getByText } = setup();
    fireEvent.click(getByTestId('edit'));

    const newTask = 'New Task';
    fireEvent.change(screen.getByRole('textbox'), { target: { value: newTask } });
    fireEvent.click(getByText('Save'));

    expect(mockUpdateTodo).toHaveBeenCalledWith(mockTodo.id, newTask);
  });

  it('Should calls removeTodo when delete button is clicked', () => {
    const { getByTestId } = setup();
    fireEvent.click(getByTestId('delete'));
    expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  it('Should mark over the test to denote the task is completed when task is clicked', () => {
    const { getByText } = setup();
    fireEvent.click(getByText(mockTodo.task));
    expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
