"use client";

type TitleRowProps = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
};

export default function TitleRow({
  searchQuery,
  setSearchQuery,
}: TitleRowProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
        <p className="text-gray-500 mt-1">Browse our latest products</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or category..."
            className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-56 sm:w-64 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
          />
        </div>
      </div>
    </div>
  );
}
