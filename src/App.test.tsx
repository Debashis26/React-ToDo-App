import React from "react";
import App from "./App";
import { render, screen } from '@testing-library/react';

describe("testing TodoList Home page", () => {
  
  test("App component snapshot testing", () => {
      const container=render(<App />);
      expect(container).toMatchInlineSnapshot(`
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <div
        class="TodoList"
      >
        <h1>
          Get To Work! 
          <span>
            An Animated Todo List Made With React Hooks.
          </span>
        </h1>
        <form
          class="NewTodoForm"
        >
          <label
            for="task"
          >
            New Todo
          </label>
          <input
            name="task"
            placeholder="New Todo"
            type="text"
            value=""
          />
          <button>
            Add Todo
          </button>
        </form>
        <ul>
          <div
            class="todo-list"
          >
            <div
              class="Todo"
            >
              <li
                class="Todo-task"
              >
                React
              </li>
              <div
                class="Todo-buttons"
              >
                <button>
                  <i
                    class="fas fa-pen"
                  />
                </button>
                <button>
                  <i
                    class="fas fa-trash"
                  />
                </button>
              </div>
            </div>
            <div
              class="Todo completed"
            >
              <li
                class="Todo-task"
              >
                Angular
              </li>
              <div
                class="Todo-buttons"
              >
                <button>
                  <i
                    class="fas fa-pen"
                  />
                </button>
                <button>
                  <i
                    class="fas fa-trash"
                  />
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </body>,
  "container": <div>
    <div
      class="TodoList"
    >
      <h1>
        Get To Work! 
        <span>
          An Animated Todo List Made With React Hooks.
        </span>
      </h1>
      <form
        class="NewTodoForm"
      >
        <label
          for="task"
        >
          New Todo
        </label>
        <input
          name="task"
          placeholder="New Todo"
          type="text"
          value=""
        />
        <button>
          Add Todo
        </button>
      </form>
      <ul>
        <div
          class="todo-list"
        >
          <div
            class="Todo"
          >
            <li
              class="Todo-task"
            >
              React
            </li>
            <div
              class="Todo-buttons"
            >
              <button>
                <i
                  class="fas fa-pen"
                />
              </button>
              <button>
                <i
                  class="fas fa-trash"
                />
              </button>
            </div>
          </div>
          <div
            class="Todo completed"
          >
            <li
              class="Todo-task"
            >
              Angular
            </li>
            <div
              class="Todo-buttons"
            >
              <button>
                <i
                  class="fas fa-pen"
                />
              </button>
              <button>
                <i
                  class="fas fa-trash"
                />
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
  });

});
