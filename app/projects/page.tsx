import React from "react";
import Nav from "../entrycompo/Nav";
import Footer from "../reusables/gitfooter";

export default function Page() {
  return (
    <main className="py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5">
            <p className="text-xl">projects directory</p>
            <div className="pt-3">
              naming scheme
              <p>project list that its name contains the letter "A" is about an app, in both browser wise and </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
