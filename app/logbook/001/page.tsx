import React from "react";
import Nav from "@/app/entrycompo/Nav";
import Image from "next/image";
import Footer from "@/app/reusables/footer";

const App = () => {
  return (
    <main className="px-5 py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5">
            <p className="text-xl">making qualos</p>
            <p className="font-mono text-neutral-500 text-sm">
              31/07/24 | user1
            </p>
            <div>
              <p>
                i basically made an website that probably no one will use. but
                heres how i did it, the development started around april 2024
                when i was bored and have basically nothing to do. the main idea
                is that i have an old website which all it does is fetches the
                data from{" "}
                <a
                  href="https://www.p2pquake.net/"
                  className="transition-colors duration-200 ease-in-out hover:text-orange-600 underline underline-offset-2"
                  target="_blank"
                >
                  p2pquake
                </a>
                's api and just displays it in a card component.
              </p>
              <Image
                src={
                  "https://pickingname.github.io/images/logbook/image/001/image.png"
                }
                width={1334 / 2}
                height={540 / 2}
                alt="previous website preview"
                className="rounded-md mx-auto mt-5"
              />
              <p className="text-center text-neutral-500">the old website</p>
              <p>
                the old website was good enough but i wanted the website to have
                a map for a better understanding and i have quite some times
                until the school starts anyway.
              </p>
              <p>[image]</p>
              <p>
                after that, i wanted to chalenge myself and make the website's
                map displays the station's measured intensity on the map itself
                and i actually did it.
              </p>
              <p>[image]</p>
              <p>
                now that the actually displays the intensity on the map, ive got
                a lot of ideas on this website, it started from making the map
                fullscreen to displaying the tsunami forecast lines
              </p>
              <br />
              <p>
                theres a lot more update which i can just explains but i will
                just shows the image as the slide show and you can just scrolls
                down and see the changes with a cool timeline
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
