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
            <p className="font-mono text-neutral-500 text-sm">
              16/09/24 | git420
            </p>
            <div>
              <p>
                hello, i am a web developer and designer studying
                <sup className="text-neutral-500 text-xs sups">(?)</sup> in
                seismology and meteorology.
                <br />
                <br />
                i&apos;m just a person who enjoys coding and designing. used to
                work with python and arduino stuffs, but realized that web
                development is more fun and interesting. i am currently learning
                react and next.js, and i am planning to learn more about
                backend, docker, and more languages in the future.
                <br />
                <br />
                i enjoy building websites and designing. my projects mainly
                focus on using free public APIs and presenting them in my own
                style.
                <br />
                <br />
                check the showcase page for cool things i&apos;ve created, and
                check out the blog for some lighthearted rants & stories
                i&apos;ve shared. and i&apos;m not a professional writer and
                will most of the time struggle on making cool and addictive
                stories so i&apos;ll mostly keep things brief to avoid losing
                your interest.
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
