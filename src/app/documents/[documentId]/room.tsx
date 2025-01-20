"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";

import { FullscreenLoader } from "@/components/fullscreen-loader";

import { getUsers } from "./actions";

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
      authEndpoint="/api/liveblocks-auth"
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
      resolveRoomsInfo={() => []}
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
