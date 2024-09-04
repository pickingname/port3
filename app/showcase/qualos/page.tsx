import React from "react";
import Nav from "@/app/entrycompo/Nav";
import Footer from "@/app/reusables/footer";
import Intro from "./compo/top";

export default function page() {
  return (
    <main>
      <div className="px-5 py-5">
        <div className="">
          <div className="">
            <Nav />
            <div>
                <Intro />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
