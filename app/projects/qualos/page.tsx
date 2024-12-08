import React from "react";
import Nav from "@/app/entrycompo/Nav";
import Footer from "@/app/reusables/footer";
import Intro from "./compo/top";
import BlogReturnHomeButton from "@/app/reusables/blogReturnHomeButton";

export default function page() {
  return (
    <main>
      <div className="py-5">
        <div className="">
          <div className="max-w-4xl mx-auto pb-12">
            <Nav />
            <div className="pr-4">
              <Intro />
            </div>
            <div className="pt-8">
              <BlogReturnHomeButton />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
