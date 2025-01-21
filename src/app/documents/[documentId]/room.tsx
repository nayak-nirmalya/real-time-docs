"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";

import { FullscreenLoader } from "@/components/fullscreen-loader";

import { getUsers, getDocuments } from "./actions";
import { Id } from "../../../../convex/_generated/dataModel";

export function Room({
  children,
  documentId,
}: {
  children: React.ReactNode;
  documentId: string;
}) {
  const [users, setUsers] = useState<
    { id: string; name: string; avatar: string }[]
  >([]);

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const usersList = await getUsers();
        setUsers(usersList);
      } catch {
        toast.error("Failed to fetch users");
      }
    },
    []
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async () => {
        const response = await fetch("/api/liveblocks-auth", {
          method: "POST",
          body: JSON.stringify({ room: documentId }),
        });

        return await response.json();
      }}
      resolveUsers={({ userIds }) =>
        userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined
        )
      }
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;

        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }

        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        const documents = await getDocuments(roomIds as Id<"documents">[]);
        return documents.map((document) => ({
          id: document.id,
          name: document.name,
        }));
      }}
    >
      <RoomProvider id={documentId}>
        <ClientSideSuspense
          fallback={<FullscreenLoader label="Room loading..." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
