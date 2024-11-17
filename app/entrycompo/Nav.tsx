import Link from "next/link";
import React from "react";
import { ModeToggle } from "../reusables/modeToggle";

let name = "git420";

export default function nav() {
  return (
    <nav className="py-5 flex justify-between items-center rounded-md pl-5 pr-4">
      <div className="flex">
        <Link href={"/"}>
          <h1 className="text-2xl font-outfit">{name}</h1>
        </Link>
        <Link
          href={"/me"}
          className="ml-4 items-center pt-1.5 transition-colors duration-200 ease-in-out hover:text-orange-600"
        >
          myself
        </Link>
        <Link
          href="/projects"
          className="ml-4 items-center pt-1.5 transition-colors duration-200 ease-in-out hover:text-orange-600"
        >
          project showcase
        </Link>
      </div>

      <div className="flex space-x-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
