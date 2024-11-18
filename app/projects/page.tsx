import React from "react";
import Nav from "../entrycompo/Nav";
import Footer from "../reusables/gitfooter";
import ProjectList from "./projectList";

export default function Page() {
  return (
    <main className="py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5 pr-4">
            <p className="text-xl"><span></span>project/list</p>
            <div className="pt-5">
              <ProjectList />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
