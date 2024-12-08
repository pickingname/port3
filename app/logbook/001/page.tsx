import React from "react";
import Nav from "@/app/entrycompo/Nav";
import Image from "next/image";
import Footer from "@/app/reusables/footer";
import TimeL from "./compo/timeL";
import Link from "next/link";
import { Home, Info } from "lucide-react";
import BlogReturnHomeButton from "@/app/reusables/blogReturnHomeButton";

const App = () => {
  return (
    <main className="py-5">
      <div className="">
        <div className="max-w-4xl mx-auto pb-12">
          <Nav />
          <div className="pl-5">
            <p className="text-xl">making qualos</p>
            <p className="font-mono text-neutral-500 text-sm">
              31/07/24 | tin
            </p>
            <div>
              <div className="bg-card p-4 rounded-md border border-border mr-5 my-5">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center animate-pulse">
                    <Info className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">note</h4>
                    <p className="text-muted-foreground text-balance">
                      this is a blog showing the development of the website. for
                      website showcase, please visit{" "}
                      <a
                        href="../showcase/qualos"
                        className="transition-colors duration-200 ease-in-out hover:text-orange-600 underline underline-offset-4"
                      >
                        [here]
                      </a>
                      .<br /> and visit the main website{" "}
                      <a
                        className="transition-colors duration-200 ease-in-out hover:text-orange-600 underline underline-offset-4"
                        href="https://qualos.info"
                      >
                        [here].
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <p>
                I basically made an website that probably no one will use. but
                heres how I did it, the development started around april 2024
                when I was bored and have basically nothing to do. the main idea
                is that I have an old website which all it does is fetches the
                data from{" "}
                <Link
                  href="https://www.p2pquake.net/"
                  className="transition-colors duration-200 ease-in-out hover:text-orange-600 underline underline-offset-2"
                  target="_blank"
                >
                  p2pquake
                </Link>
                &apos;s api and just displays it in a card component.
              </p>
              <Image
                src={
                  "https://pickingname.github.io/images/logbook/image/001/image.png"
                }
                width={1334 / 2}
                height={540 / 2}
                alt="previous website preview"
                className="rounded-md mx-auto mt-5 mb-3"
              />
              <p className="text-center text-neutral-500">the old website</p>
              <p>
                the old website was good enough but I wanted the website to have
                a map for a better understanding and I have quite some times
                until the school starts anyway.
              </p>
              <Image
                src={
                  "https://pickingname.github.io/images/logbook/image/001/0-46-53.png"
                }
                alt="first ui look"
                width={1920 / 3}
                height={1504 / 3}
                className="rounded-md mx-auto mt-5"
              />
              <p className="text-center text-neutral-500 mb-3">
                first ui with the map
              </p>
              <p>
                after that, I wanted to chalenge myself and make the
                website&apos;s map displays the station&apos;s measured
                intensity on the map itself and I actually did it.
              </p>
              <Image
                src={
                  "https://pickingname.github.io/images/logbook/image/001/0-49-18.png"
                }
                alt="website maps with intensity icons"
                width={1920 / 3}
                height={1504 / 3}
                className="rounded-md mx-auto mt-5"
              />
              <p className="text-center text-neutral-500 mb-3">
                maps which now displays the intensity icons
              </p>
              <p>
                now that the actually displays the intensity on the map, ive got
                a lot of ideas on this website, it started from making the map
                fullscreen to displaying the tsunami forecast lines
              </p>
              <br />
              <p>
                theres a lot more update which I can just explains but I will
                just shows the image as the slide show and you can just scrolls
                down and see the changes with a cool timeline
              </p>
              <div>
                <TimeL />
              </div>
            </div>
            <BlogReturnHomeButton />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
