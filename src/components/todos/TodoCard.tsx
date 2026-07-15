import { CheckCircle2, Circle } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Todo } from "@/types/todo";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US");
}

export function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={todo.completed ? "text-muted-foreground line-through" : undefined}
        >
          {todo.title}
        </CardTitle>
        <CardAction>
          {todo.completed ? (
            <CheckCircle2 className="size-5 text-muted-foreground" />
          ) : (
            <Circle className="size-5 text-muted-foreground" />
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        {todo.description && <CardDescription>{todo.description}</CardDescription>}
        <p className="text-xs text-muted-foreground">{formatDate(todo.createdAt)}</p>
      </CardContent>
    </Card>
  );
}
