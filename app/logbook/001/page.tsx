import React from "react";
import Nav from "@/app/entrycompo/Nav";

const App = () => {
  return (
    <main className="px-5 py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5">
            <p className="text-xl">content title</p>
            <p className="font-mono text-neutral-500 text-sm">
              31/07/24 | user1
            </p>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique cumque odit cupiditate aspernatur porro possimus, corporis tenetur consequuntur dolorem hic iusto officiis sapiente ducimus praesentium ut ipsa omnis mollitia.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
