"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type Project = {
  id: number;
  name: string;
  year: number;
  status: "archived" | "active" | "stale";
};

const projects: Project[] = [
  { id: 1, name: "fgraph", year: 2024, status: "stale" },
  { id: 2, name: "unnamed river height viewer", year: 2024, status: "stale" },
  { id: 3, name: "untitled weather app", year: 2024, status: "stale" },
  { id: 4, name: "untitled weather dashboard", year: 2024, status: "stale" },
  { id: 5, name: "qualos", year: 2024, status: "active" },
  { id: 6, name: "zinc", year: 2024, status: "archived" },
];

export default function ProjectList() {
  const [sortField, setSortField] = useState<keyof Project>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedProjects = [...projects].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
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
    <div className="min-h-screen max-w-4xl mx-auto">
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
                  className="hover:bg-neutral-500/30 dark:hover:bg-neutral-300/30 transition-colors ease-out duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-medium rounded-sm ${
                        project.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : project.status === "stale"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
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
