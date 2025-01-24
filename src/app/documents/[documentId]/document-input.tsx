import { BsCloudCheck } from "react-icons/bs";

import { Id } from "../../../../convex/_generated/dataModel";

export function DocumentInput({
  id,
  title,
}: {
  title: string;
  id: Id<"documents">;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
      <BsCloudCheck />
    </div>
  );
}
