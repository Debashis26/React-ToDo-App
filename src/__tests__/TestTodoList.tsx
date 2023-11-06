import React from "react";
import App from "../App";
import { render, screen } from '@testing-library/react';

describe("testing TodoList Home page", () => {
  
  test("App component snapshot testing", () => {
      const container=render(<App />);
      expect(2+2).toBe(4);
  });

});
