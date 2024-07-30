import Link from "next/link";
import React from "react";
import { ModeToggle } from "../reusables/modeToggle";

let name = "me";

export default function nav() {
  return (
    <nav className="py-5 flex justify-between items-center rounded-md px-5">
      <div className="flex">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold font-mono">{name}.port();</h1>
        </Link>
        <Link
          href={"/blogs"}
          className="ml-4 items-center pt-1.5 transition-colors duration-200 ease-in-out hover:text-orange-600"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
          className="ml-4 items-center pt-1.5 transition-colors duration-200 ease-in-out hover:text-orange-600"
        >
          Project showcase
        </Link>
        {/* <p className="ml-4 items-center pt-1.5">Project showcase</p> */}
      </div>

      <div className="flex space-x-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
