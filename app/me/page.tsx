import React from "react";
import Nav from "@/app/entrycompo/Nav";
import Footer from "../reusables/gitfooter";

const App = () => {
  return (
    <main className="py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5">
            <p className="text-xl">about me</p>
            <p className="font-mono text-neutral-500 text-sm">16/09/24 | tin</p>
            <div>
              <p>
                hello, I am a web developer and designer with a background
                <sup className="text-neutral-500 text-xs sups">(?)</sup> in
                seismology and meteorology.
                <br />
                <br />
                I have a passion for coding and design, having previously worked
                with Python and Arduino projects. however, I discovered that web
                development fits me more. currently, I am expanding my skill set
                by learning React and Next.js, with plans to get into backend
                development, Docker, and additional programming languages in the
                future.
                <br />
                <br />
                I enjoyed building websites and creating cool designs. my
                projects primarily focus on utilizing free public APIs, which I
                present in my own distinctive style.
                <br />
                <br />I invite you to explore my showcase page to view some of
                the exciting projects I&apos;ve created. additionally, feel free
                to visit my blog (which is incomplete for now), where I share
                stories about my projects and other topics.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
