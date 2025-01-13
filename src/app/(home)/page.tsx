"use client";

import { usePaginatedQuery } from "convex/react";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

import { api } from "../../../convex/_generated/api";

export default function Home() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 }
  );

  if (documents === undefined) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {/* TODO: Render Documents List */}
      </div>
    </div>
  );
}
