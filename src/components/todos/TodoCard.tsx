"use client";

import { CheckCircle2, Circle, Pencil, Trash2 } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Todo } from "@/types/todo";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US");
}

interface TodoCardProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export function TodoCard({ todo, onToggle, onEdit, onDelete }: TodoCardProps) {
  return (
    <Card className="group">
      <CardHeader>
        <CardTitle
          className={todo.completed ? "text-muted-foreground line-through" : undefined}
        >
          {todo.title}
        </CardTitle>
        <CardAction>
          <button
            type="button"
            onClick={() => onToggle(todo)}
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.completed ? (
              <CheckCircle2 className="size-5 text-muted-foreground" />
            ) : (
              <Circle className="size-5 text-muted-foreground" />
            )}
          </button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        {todo.description && <CardDescription>{todo.description}</CardDescription>}
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{formatDate(todo.createdAt)}</p>
          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Edit task"
              onClick={() => onEdit(todo)}
            >
              <Pencil className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Delete task"
              onClick={() => onDelete(todo)}
            >
              <Trash2 className="size-4 text-destructive" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
