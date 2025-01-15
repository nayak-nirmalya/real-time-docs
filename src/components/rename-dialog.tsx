"use client";

import { useState } from "react";
import { useMutation } from "convex/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

export function RenameDialog({
  documentId,
  initialTitle,
  children,
}: {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [isUpdating, setIsUpdating] = useState(false);
  const [open, setOpen] = useState(false);

  const update = useMutation(api.documents.updateById);

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsUpdating(true);

    update({ id: documentId, title: title.trim() || "Untitled" }).finally(
      () => {
        setIsUpdating(false);
        setOpen(false);
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="Document name"
              onClick={(ev) => ev.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              disabled={isUpdating}
              onClick={(ev) => {
                ev.stopPropagation();
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isUpdating}
              onClick={(ev) => ev.stopPropagation()}
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
