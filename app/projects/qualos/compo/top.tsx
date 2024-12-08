import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  SquareActivity,
  ExternalLink,
  Waves,
  FileJson2,
  Settings2,
  MonitorSmartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Intro() {
  return (
    <div className="pl-5">
      <div className="h-32 overflow-hidden mb-8 rounded-lg">
        <iframe
          src="https://minimal.qualos.info/"
          title="preview"
          className="max-w-full object-cover h-full w-full rounded-lg"
        ></iframe>
      </div>

      <div className="flex h-5 items-center space-x-3 text-sm">
        <SquareActivity />
        <Separator orientation="vertical" className="bg-neutral-500" />
        <div className="">Introducing qualos</div>
      </div>
      <div>
        <p className="text-xl pt-2">
          a web based earthquake information viewer
        </p>
      </div>
      <div className="flex h-5 items-center space-x-3 text-sm mt-3">
        <p>base version</p>
        <div className="">
          <Link href={"https://qualos.info"} target="_blank">
            <Button className="h-8 transition-colors duration-200 ease-in-out hover:bg-orange-600">
              <ExternalLink className="mr-2 h-4 w-4" /> visit
            </Button>
          </Link>
        </div>
        <Separator orientation="vertical" className="bg-neutral-500" />
        <p className="opacity-50">minimal version</p>
        <div className="opacity-50">
          <Button className="h-8 transition-colors duration-200 ease-in-out hover:bg-neutral-600 dark:hover:bg-neutral-300">
            <ExternalLink className="mr-2 h-4 w-4" /> visit
          </Button>
        </div>
      </div>
      {/* <div>
        <div className="my-8 border rounded-md">
          <p className="text-center mt-3 text-xl decoration-neutral-500 underline underline-offset-4">
            why this?
          </p>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="rounded-lg p-6 text-center">
                <div className="text-xl mb-2">01</div>
                <p className="text-lg mb-2">its fast</p>
                <p className="text-neutral-500">
                  this website is designed to load quickly and provide you with
                  the latest information
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="rounded-lg p-6 text-center">
                <div className="text-xl mb-2">02</div>
                <p className="text-lg mb-2">its straightforward</p>
                <p className="text-neutral-500">
                  no need to navigate through a maze of information to see a
                  report
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="rounded-lg p-6 text-center">
                <div className="text-xl mb-2">03</div>
                <p className="text-lg mb-2">its open source</p>
                <p className="text-neutral-500">
                  the source code for this website is available on github
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Card className="w-full grid gap-6 border-none shadow-none mt-4">
          <div>
            <h3 className="text-xl">features</h3>
            <p className="text-muted-foreground text-pretty">
              everything is built within a web environment, which means that
              there may occasionally be bugs in these features, though they are
              generally rare.
            </p>
          </div>

          <div className="text-balance">
            <Waves className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            <h4 className="text-base font-medium">tsunami forecast</h4>
            <p className="text-sm text-muted-foreground text-pretty">
              shows a tsunami forecast as a line on the map itself (classified
              as 2 classes, watch and warning). forecast data is fetched from{" "}
              <a
                href="https://p2pquake.net"
                target="_blank"
                className="transition-colors duration-200 ease-in-out hover:text-orange-600 underline"
              >
                p2pquake
              </a>
            </p>

            <br />

            <FileJson2 className="w-6 h-6 text-muted-foreground flex-shrink-0 mb-1" />
            <h4 className="text-base font-medium">
              displays multiple data format
            </h4>
            <p className="text-sm text-muted-foreground text-pretty">
              supports multiple data formats, including DetailScale (intensity
              report), ScalePrompt (prefecture intensity report), Foreign
              (distant earthquake report), Destination (Epicenter information
              confirmation), Tsunami warning / watch.
            </p>

            <br />

            <Settings2 className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            <h4 className="text-base font-medium">customisable behavior</h4>
            <p className="text-sm text-muted-foreground text-pretty">
              you can customize the UI and fetching/displaying behavior using
              the settings button in the bottom right corner.
            </p>

            <br />

            <MonitorSmartphone className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            <h4 className="text-base font-medium">responsive UI</h4>
            <p className="text-sm text-muted-foreground text-wrap">
              the website and it&apos;s UI is responsive and works on mobile
              phones, tablets, and desktops.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
