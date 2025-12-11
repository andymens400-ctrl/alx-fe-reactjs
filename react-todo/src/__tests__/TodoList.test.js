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
    fireEvent.change(screen.getByTestId("todo-input"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByTestId("delete-btn")[0];
    const todoText = screen.getByText("Learn React");
    fireEvent.click(deleteBtn);
    expect(todoText).not.toBeInTheDocument();
  });
});
