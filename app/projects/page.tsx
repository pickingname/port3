import React from "react";
import { Hammer, Undo2 } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <Hammer className="w-12 h-12 text-gray-500 mx-auto" />
        </div>
        <h1 className="text-2xl mb-2">work in progress</h1>
        <p className="text-gray-600 mb-4">
          <span className="font-mono">/projects</span> directory is still under
          development
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-800 ease-out duration-150"
        >
          <Undo2 className="w-5 h-5 mr-2" />
          go back
        </a>
      </div>
    </div>
  );
}
