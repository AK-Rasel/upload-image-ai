import React from "react";
import { Slider } from "../ui/slider";

export default function Sidebar() {
  return (
    <aside className="bg-white border border-gray-100 rounded-xl p-5 h-fit">
      <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
      <ul className="space-y-1 mb-7">
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium text-sm"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              All Products
            </span>
            <span>6</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                <rect x="2" y="14" width="5" height="7" rx="1.5" />
                <rect x="17" y="14" width="5" height="7" rx="1.5" />
              </svg>
              Electronics
            </span>
            <span className="text-gray-400">2</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M8 4l4 2 4-2 4 4-3 3v9H7v-9L4 8z" />
              </svg>
              Clothing
            </span>
            <span className="text-gray-400">1</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M6 8V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
                <rect x="4" y="8" width="16" height="13" rx="2" />
                <path d="M9 8v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8" />
              </svg>
              Bags
            </span>
            <span className="text-gray-400">1</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M3 17c0-2 1.5-3 3-3.5l4-1.5 3-3c1-1 2-1 3-.3l3 2.3c1 .7 2 1 3.5 1H21v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1z" />
              </svg>
              Footwear
            </span>
            <span className="text-gray-400">1</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="6.5" cy="13" r="3.3" />
                <circle cx="17.5" cy="13" r="3.3" />
                <path d="M10 12h4" />
              </svg>
              Accessories
            </span>
            <span className="text-gray-400">1</span>
          </a>
        </li>
      </ul>

      <h3 className="font-bold text-gray-900 mb-3">Price Range</h3>
      {/* <div className="relative h-1.5 bg-gray-100 rounded-full mb-2">
        <div className="absolute inset-y-0 left-0 right-0 bg-indigo-600 rounded-full"></div>
        <div className="absolute -top-1.5 right-0 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow"></div>
      </div> */}
      <div>
        <Slider
          defaultValue={[10]}
          max={100}
          step={1}
          className="bg-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 my-7 ">
          <span>$10</span>
          <span>$100</span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
      <div className="relative">
        <select className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Most Popular</option>
        </select>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </aside>
  );
}
