"use client";

import React from "react";

const blogPosts = [
  { date: "2021", title: "test", type: "blog", url: "https://example.com/a" },
  {
    date: "2020",
    title: "test2",
    type: "showcase",
    url: "https://example.com/b",
  },
];

const Li = () => {
  return (
    <div className="text-black dark:text-gray-500 p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left ">
            <th className="py-2 pl-2 pr-4 font-normal">date</th>
            <th className="py-2 pr-4 font-normal">title</th>
            <th className="py-2 pr-2 text-right font-normal">type</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-neutral-300 hover:bg-opacity-30 dark:hover:bg-neutral-600 dark:hover:bg-opacity-30"
              onClick={() => window.open(post.url, "_blank")}
            >
              <td className="py-2 pl-2 pr-4">{post.date}</td>
              <td className="py-2 pr-56">{post.title}</td>
              <td className="py-2 pr-2 text-right">
                {post.type.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Li;
