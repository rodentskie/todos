import type { CreateTodoInput, Todo, UpdateTodoInput } from "@/types/todo";

const TODOS_API_URL = "https://htc.klaro.rodentskie.com/api/todos";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(TODOS_API_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch todos (${res.status})`);
  }

  const todos: Todo[] = await res.json();
  return todos.filter((todo) => todo.deletedAt === null);
}

export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  const res = await fetch(TODOS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error(`Failed to create todo (${res.status})`);
  }

  return res.json();
}

export async function updateTodo(id: number, input: UpdateTodoInput): Promise<Todo> {
  const res = await fetch(`${TODOS_API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error(`Failed to update todo (${res.status})`);
  }

  return res.json();
}

export async function deleteTodo(id: number): Promise<void> {
  const res = await fetch(`${TODOS_API_URL}/${id}`, { method: "DELETE" });

  if (!res.ok) {
    throw new Error(`Failed to delete todo (${res.status})`);
  }
}
