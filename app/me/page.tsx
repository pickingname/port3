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
                i am nothing special, just a person who likes to code and
                design. i used to work with python and arduino stuffs, just to
                relise that its really not for me.
                <br />
                <br />
                i like to make websites and design things, i am not a
                professional but i am learning. my projects are mostly about
                using free public api and displaying it in my type of way. this
                portfoilo is really nothing special, i just wanted to make a
                website for myself, no flashing colors and cool 3d texts, just a
                simple sleek website. this portfoilo style is also inspried by rauchg. 
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
