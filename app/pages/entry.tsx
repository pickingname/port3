import React from "react";
import Li from "../entrycompo/BlogList";
import Nav from "../entrycompo/Nav";
import Footer from "../reusables/gitfooter";

const App = () => {
  return (
    <main className="py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="text-xl pl-5">
            <p>blogs</p>
            <p className="font-mono text-neutral-500 text-sm">
              16/11/24 | git420
            </p>
          </div>
          <Li />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
