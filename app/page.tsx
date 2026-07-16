import { TodoDashboard } from "@/components/todos/TodoDashboard";
import { getTodos } from "@/lib/todos";

export default async function Home() {
  const todos = await getTodos();

  return <TodoDashboard initialTodos={todos} />;
}
