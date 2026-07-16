"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TodoGrid } from "@/components/todos/TodoGrid";
import { TodoFormSheet } from "@/components/todos/TodoFormSheet";
import { DeleteTodoDialog } from "@/components/todos/DeleteTodoDialog";
import { createTodo, deleteTodo, updateTodo } from "@/lib/todos";
import type { Todo } from "@/types/todo";

export function TodoDashboard({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [formOpen, setFormOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [deletingTodo, setDeletingTodo] = useState<Todo | null>(null);

  const completedCount = todos.filter((todo) => todo.completed).length;

  function openAddForm() {
    setEditingTodo(null);
    setFormOpen(true);
  }

  function openEditForm(todo: Todo) {
    setEditingTodo(todo);
    setFormOpen(true);
  }

  async function handleFormSubmit(values: { title: string; description: string }) {
    if (editingTodo) {
      const updated = await updateTodo(editingTodo.id, values);
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    } else {
      const created = await createTodo(values);
      setTodos((prev) => [created, ...prev]);
    }
  }

  async function handleToggle(todo: Todo) {
    const updated = await updateTodo(todo.id, { completed: !todo.completed });
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }

  async function handleDeleteConfirm() {
    if (!deletingTodo) return;
    await deleteTodo(deletingTodo.id);
    setTodos((prev) => prev.filter((t) => t.id !== deletingTodo.id));
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold">My Tasks</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {todos.length} total • {completedCount} completed
          </p>
        </div>
        <Button onClick={openAddForm}>
          <Plus className="size-4" />
          Add Task
        </Button>
      </div>
      <div className="mt-6">
        <TodoGrid
          todos={todos}
          onToggle={handleToggle}
          onEdit={openEditForm}
          onDelete={setDeletingTodo}
        />
      </div>

      <TodoFormSheet
        open={formOpen}
        onOpenChange={setFormOpen}
        todo={editingTodo}
        onSubmit={handleFormSubmit}
      />
      <DeleteTodoDialog
        open={deletingTodo !== null}
        onOpenChange={(open) => {
          if (!open) setDeletingTodo(null);
        }}
        todo={deletingTodo}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
