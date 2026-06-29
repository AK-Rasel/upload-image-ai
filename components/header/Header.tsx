"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* <!-- Logo --> */}
        <a href="index.html" className="flex items-center gap-2.5 shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-indigo-600"
          >
            <path d="M6 9V7a4 4 0 0 1 8 0v2" />
            <path d="M5 9h10l1 11H4z" />
          </svg>
          <span className="font-bold leading-tight text-gray-900">
            Product
            <br />
            Collection
          </span>
        </a>

        {/* <!-- Nav --> */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`relative py-2 text-sm font-medium transition-colors duration-300   ${pathName === "/" ? "text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-900 transition"}`}
          >
            Shop
          </Link>
          <Link
            href="/add-product"
            className={`relative py-2 text-sm font-medium transition-colors duration-300  ${pathName === "/add-product" ? "text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-900 transition"}`}
          >
            Add Product
          </Link>
        </nav>

        {/* <!-- Avatar --> */}
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5"
          >
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
