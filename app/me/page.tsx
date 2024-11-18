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
                hello, i am a web developer and designer studying in seismology
                and meteorology.
                <br />
                <br />
                i&apos;m just a person who enjoys coding and designing. used to work with python and arduino stuffs, but realized that web development is more fun and interesting. i am currently learning react and next.js, and i am planning to learn more about backend, docker, and more languages in the future.
                <br />
                <br />
                i enjoy building websites and designing. my projects mainly focus on using free public APIs and presenting them in my own style. this portfolio is simple and sleek, no flashy colors or any fancy UIs. it&apos;s also inspired by Rauchg&apos;s design approach.
                <br />
                <br />
                check the main page and look at the showcase for cool things i
                build, look at the blog for some useless information i wrote. i
                am not a writer, i am not really good at writing stories and
                long texts, things will get boring quick so i will keep it
                short.
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
