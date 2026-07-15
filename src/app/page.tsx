import { TodoGrid } from "@/components/todos/TodoGrid";
import { getTodos } from "@/lib/todos";

export default async function Home() {
  const todos = await getTodos();
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8">
      <h1 className="font-heading text-3xl font-semibold">My Tasks</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {todos.length} total • {completedCount} completed
      </p>
      <div className="mt-6">
        <TodoGrid todos={todos} />
      </div>
    </div>
  );
}
