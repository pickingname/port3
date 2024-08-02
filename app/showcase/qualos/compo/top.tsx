import React from "react";
import { Separator } from "@/components/ui/separator";
import { SquareActivity } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="pl-5">
      <div className="h-32 overflow-hidden mb-8">
        <Image
          src={"https://pickingname.github.io/images/showcase/sfqr/ql-ac.png"}
          alt="showcase image"
          width={1920}
          height={1080}
          className="max-w-full object-cover h-full w-full"
        />
      </div>
      <div className="flex h-5 items-center space-x-3 text-sm">
        <SquareActivity />
        <Separator orientation="vertical" />
        <div className="">Introducing qualos</div>
      </div>
      <div>
        <p className="text-xl pt-2">
          beautifully presented earthquake information, on the web
        </p>
      </div>
    </div>
  );
}
