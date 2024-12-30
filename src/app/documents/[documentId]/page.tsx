import { Editor } from "./editor";

export default async function DocumentIdPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;

  return (
    <div>
      Document ID: {documentId}
      <Editor />
    </div>
  );
}
