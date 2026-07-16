"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Todo } from "@/types/todo";

const CONFIRM_WORD = "delete";

interface DeleteTodoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: Todo | null;
  onConfirm: () => Promise<void>;
}

export function DeleteTodoDialog({ open, onOpenChange, todo, onConfirm }: DeleteTodoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete task</DialogTitle>
          <DialogDescription>
            This will delete &ldquo;{todo?.title}&rdquo;. This action cannot be undone. Type{" "}
            <span className="font-medium text-foreground">delete</span> to confirm.
          </DialogDescription>
        </DialogHeader>
        <DeleteTodoForm
          key={open ? (todo?.id ?? "delete") : "closed"}
          onCancel={() => onOpenChange(false)}
          onConfirm={async () => {
            await onConfirm();
            onOpenChange(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

interface DeleteTodoFormProps {
  onCancel: () => void;
  onConfirm: () => Promise<void>;
}

function DeleteTodoForm({ onCancel, onConfirm }: DeleteTodoFormProps) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const canDelete = confirmText.trim().toLowerCase() === CONFIRM_WORD;

  async function handleConfirm() {
    setIsDeleting(true);
    try {
      await onConfirm();
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label htmlFor="delete-confirm" className="sr-only">
          Type &quot;delete&quot; to confirm
        </Label>
        <Input
          id="delete-confirm"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder="Type delete to confirm"
          autoFocus
        />
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onCancel} disabled={isDeleting}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleConfirm} disabled={!canDelete || isDeleting}>
          Delete
        </Button>
      </DialogFooter>
    </>
  );
}
