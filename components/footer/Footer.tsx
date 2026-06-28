import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <span>© 2024 Product Collection. All rights reserved.</span>
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" className="hover:text-indigo-600 transition">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4.5 h-4.5"
            >
              <path d="M13 22v-8h3l.5-3.5H13V8.5c0-1 .3-1.7 1.8-1.7H17V3.3C16.5 3.2 15.3 3 14 3c-3 0-5 1.8-5 5.2V10.5H6V14h3v8z" />
            </svg>
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="w-4.5 h-4.5"
            >
              <path d="M4 4l16 16" />
              <path d="M20 4L4 20" />
            </svg>
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4.5 h-4.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17"
                cy="7"
                r="0.6"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
