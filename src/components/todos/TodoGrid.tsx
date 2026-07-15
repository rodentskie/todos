import { TodoCard } from "@/components/todos/TodoCard";
import type { Todo } from "@/types/todo";

export function TodoGrid({ todos }: { todos: Todo[] }) {
  if (todos.length === 0) {
    return <p className="text-sm text-muted-foreground">No todos yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
