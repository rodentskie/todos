import { TodoCard } from "@/components/todos/TodoCard";
import type { Todo } from "@/types/todo";

interface TodoGridProps {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export function TodoGrid({ todos, onToggle, onEdit, onDelete }: TodoGridProps) {
  if (todos.length === 0) {
    return <p className="text-sm text-muted-foreground">No todos yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
