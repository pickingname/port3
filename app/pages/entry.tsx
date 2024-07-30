import React from "react";
import Li from "../entrycompo/BlogList";

const App = () => {
  return (
    <main className="px-5 py-5">
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto pb-12">
          <Li />
        </div>
      </div>
    </main>
  );
};

export default App;
