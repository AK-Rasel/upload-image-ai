import React from "react";
import { Slider } from "../ui/slider";

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Bags",
  "Footwear",
  "Accessories",
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Electronics: <path d="M3 14v-2a9 9 0 0 1 18 0v2M2 14h5v7H2zM17 14h5v7h-5z" />,
  Clothing: <path d="M8 4l4 2 4-2 4 4-3 3v9H7v-9L4 8z" />,
  Bags: (
    <>
      <path d="M6 8V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
      <rect x="4" y="8" width="16" height="13" rx="2" />
    </>
  ),
  Footwear: (
    <path d="M3 17c0-2 1.5-3 3-3.5l4-1.5 3-3c1-1 2-1 3-.3l3 2.3c1 .7 2 1 3.5 1H21v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1z" />
  ),
  Accessories: (
    <>
      <circle cx="6.5" cy="13" r="3.3" />
      <circle cx="17.5" cy="13" r="3.3" />
      <path d="M10 12h4" />
    </>
  ),
};

type SidebarProps = {
  categoryCounts: Record<string, number>;
  totalCount: number;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  minPrice: number;
  setMinPrice: (val: number) => void;
  maxPrice: number;
  sortBy: string;
  setSortBy: (val: string) => void;
};

export default function Sidebar({
  categoryCounts,
  totalCount,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  sortBy,
  setSortBy,
}: SidebarProps) {
  return (
    <aside className="bg-white border border-gray-100 rounded-xl p-5 h-fit">
      <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
      <ul className="space-y-1 mb-7">
        <li>
          <button
            type="button"
            onClick={() => setSelectedCategory("All Products")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
              selectedCategory === "All Products"
                ? "bg-indigo-50 text-indigo-600 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
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
            <span
              className={
                selectedCategory === "All Products" ? "" : "text-gray-400"
              }
            >
              {totalCount}
            </span>
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat}>
            <button
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
                selectedCategory === cat
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
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
                  {CATEGORY_ICONS[cat]}
                </svg>
                {cat}
              </span>
              <span className={selectedCategory === cat ? "" : "text-gray-400"}>
                {categoryCounts[cat] || 0}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-gray-900 mb-3">Price Range</h3>
      <div>
        <Slider
          value={[minPrice]}
          onValueChange={(val) => setMinPrice(val[0])}
          min={10}
          max={maxPrice}
          step={1}
          className="bg-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 my-7">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
        >
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
