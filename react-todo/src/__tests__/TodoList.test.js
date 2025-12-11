import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo when clicked", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    // Before toggle
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);

    // After toggle
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    const deleteButton = todo.querySelector("button");

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
