"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { Todo } from "@/types/todo";

interface TodoFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: Todo | null;
  onSubmit: (values: { title: string; description: string }) => Promise<void>;
}

export function TodoFormSheet({ open, onOpenChange, todo, onSubmit }: TodoFormSheetProps) {
  const isEditing = todo !== null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit Task" : "Add New Task"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Update the task details."
              : "Create a new task by filling in the details"}
          </SheetDescription>
        </SheetHeader>
        <TodoForm
          key={open ? (todo?.id ?? "new") : "closed"}
          todo={todo}
          isEditing={isEditing}
          onCancel={() => onOpenChange(false)}
          onSubmit={async (values) => {
            await onSubmit(values);
            onOpenChange(false);
          }}
        />
      </SheetContent>
    </Sheet>
  );
}

interface TodoFormProps {
  todo: Todo | null;
  isEditing: boolean;
  onCancel: () => void;
  onSubmit: (values: { title: string; description: string }) => Promise<void>;
}

function TodoForm({ todo, isEditing, onCancel, onSubmit }: TodoFormProps) {
  const [title, setTitle] = useState(todo?.title ?? "");
  const [description, setDescription] = useState(todo?.description ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit({ title: title.trim(), description: description.trim() });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="todo-title">Title</Label>
          <Input
            id="todo-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            autoFocus
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="todo-description">Description</Label>
          <Textarea
            id="todo-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          />
        </div>
      </div>
      <SheetFooter className="flex-row justify-end">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting || !title.trim()}>
          {isEditing ? "Save Task" : "Add Task"}
        </Button>
      </SheetFooter>
    </form>
  );
}
