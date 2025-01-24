import { preloadQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Document } from "./document";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

export default async function DocumentIdPage({
  params,
}: {
  params: Promise<{ documentId: Id<"documents"> }>;
}) {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;
  if (!token) throw new Error("Unauthorized");

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  );

  return (
    <Document documentId={documentId} preloadedDocument={preloadedDocument} />
  );
}
