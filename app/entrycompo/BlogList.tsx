'use client'

import React from 'react';

const blogPosts = [
  { date: '2021', title: 'test', views: 64905, url: 'https://example.com/a' },
  { date: '2020', title: 'test2', views: 37214, url: 'https://example.com/b' },
];

const Li = () => {
  return (
    <div className="text-gray-300 p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2 pr-4 font-normal">date</th>
            <th className="py-2 pr-4 font-normal">title</th>
            <th className="py-2 text-right font-normal">views</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 hover:bg-gray-800 cursor-pointer"
              onClick={() => window.open(post.url, '_blank')}
            >
              <td className="py-2 pr-4 text-gray-500">{post.date}</td>
              <td className="py-2 pr-56">{post.title}</td>
              <td className="py-2 text-right">{post.views.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Li;
