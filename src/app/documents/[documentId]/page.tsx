import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

export default async function DocumentIdPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
