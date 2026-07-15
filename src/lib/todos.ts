import type { Todo } from "@/types/todo";

const TODOS_API_URL = "https://htc.klaro.rodentskie.com/api/todos";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(TODOS_API_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch todos (${res.status})`);
  }

  const todos: Todo[] = await res.json();
  return todos.filter((todo) => todo.deletedAt === null);
}
