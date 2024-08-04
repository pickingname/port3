import React from "react";
import { Separator } from "@/components/ui/separator";
import { SquareActivity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          beautifully presented earthquake information, on the web
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
        <p>minimal version</p>
        <div className="">
          <Link href={"https://minimal.qualos.info"} target="_blank">
            <Button className="h-8 transition-colors duration-200 ease-in-out hover:bg-orange-600">
              <ExternalLink className="mr-2 h-4 w-4" /> visit
            </Button>
          </Link>
        </div>
      </div>
      <div>
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
                  the source code for this website is available on github to
                  ensure transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
