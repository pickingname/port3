"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type Project = {
  id: number;
  name: string;
  year: number;
  status: "archived" | "active" | "stale";
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "fgraph",
    year: 2024,
    status: "stale",
    link: "https://fgraph.vercel.app",
  },
  {
    id: 2,
    name: "unnamed river height viewer",
    year: 2024,
    status: "archived",
    link: "https://wesm.pages.dev",
  },
  {
    id: 3,
    name: "untitled weather app (github repo link)",
    year: 2024,
    status: "archived",
    link: "https://github.com/pickingname/weath/tree/entry-page",
  },
  {
    id: 4,
    name: "untitled weather dashboard (github repo link)",
    year: 2024,
    status: "active",
    link: "https://github.com/pickingname/weath/tree/dashboard",
  },
  {
    id: 5,
    name: "qualos",
    year: 2024,
    status: "active",
    link: "../projects/qualos",
  },
  {
    id: 6,
    name: "zinc (no page)",
    year: 2024,
    status: "archived",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function ProjectList() {
  const [sortField, setSortField] = useState<keyof Project>("year");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const statusOrder = ["active", "stale", "archived"];

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortField === "status") {
      const aIndex = statusOrder.indexOf(a.status);
      const bIndex = statusOrder.indexOf(b.status);
      return sortDirection === "asc" ? aIndex - bIndex : bIndex - aIndex;
    } else {
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    }
  });

  const toggleSort = (field: keyof Project) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ field }: { field: keyof Project }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUpIcon className="inline w-4 h-4" />
    ) : (
      <ChevronDownIcon className="inline w-4 h-4" />
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="dark:bg-neutral-800 bg-neutral-100 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="dark:bg-neutral-700 bg-neutral-200 dark:text-white text-black">
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("name")}
                >
                  Project Name <SortIcon field="name" />
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("year")}
                >
                  Year <SortIcon field="year" />
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("status")}
                >
                  Status <SortIcon field="status" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-neutral-700">
              {sortedProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-neutral-500/5 dark:hover:bg-neutral-300/5 transition-colors ease-out duration-200"
                >
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="flex items-center">
                      <a
                        href={project.link}
                        target="_self"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {project.name}
                      </a>
                      {/* <ExternalLink className="mt-[4px] ml-1 h-3.5 w-3.5" /> */}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    {project.year}
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-medium rounded-sm ${
                        project.status === "active"
                          ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : project.status === "stale"
                          ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}