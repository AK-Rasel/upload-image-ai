export default function ShopStore() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* <!-- Title row --> */}
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
              placeholder="Search products..."
              className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-56 sm:w-64 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
            />
          </div>

          <a
            href="add-product.html"
            className="inline-flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition whitespace-nowrap"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Add Product
          </a>
        </div>
      </div>

      {/* <!-- Sidebar + Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* <!-- Sidebar --> */}
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
          <div className="relative h-1.5 bg-gray-100 rounded-full mb-2">
            <div className="absolute inset-y-0 left-0 right-0 bg-indigo-600 rounded-full"></div>
            <div className="absolute -top-1.5 right-0 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-7">
            <span>$10</span>
            <span>$100</span>
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

        {/* <!-- Product grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Wireless Headphone --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-indigo-50 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-indigo-400"
              >
                <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                <rect x="2" y="14" width="5" height="7" rx="1.5" />
                <rect x="17" y="14" width="5" height="7" rx="1.5" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Wireless Headphone
              </h3>
              <p className="text-indigo-600 font-bold mt-1">$59.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Denim Jacket --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-blue-50 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-blue-400"
              >
                <path d="M8 4l4 2 4-2 4 4-3 3v9H7v-9L4 8z" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Denim Jacket</h3>
              <p className="text-indigo-600 font-bold mt-1">$49.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Travel Backpack --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-gray-100 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-gray-400"
              >
                <path d="M6 8V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
                <rect x="4" y="8" width="16" height="13" rx="2" />
                <path d="M9 8v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8" />
                <path d="M9 14h6" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Travel Backpack</h3>
              <p className="text-indigo-600 font-bold mt-1">$39.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Smart Watch --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-amber-50 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-amber-500"
              >
                <circle cx="12" cy="12" r="6" />
                <path d="M9 3h6l-1 4h-4z" />
                <path d="M9 21h6l-1-4h-4z" />
                <path d="M12 9v3l2 1" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Smart Watch</h3>
              <p className="text-indigo-600 font-bold mt-1">$99.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Sneakers --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-orange-50 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-orange-400"
              >
                <path d="M3 17c0-2 1.5-3 3-3.5l4-1.5 3-3c1-1 2-1 3-.3l3 2.3c1 .7 2 1 3.5 1H21v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1z" />
                <path d="M6 13.5V11" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Sneakers</h3>
              <p className="text-indigo-600 font-bold mt-1">$69.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Sunglasses --> */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <a
              href="product.html"
              className="block h-48 bg-stone-100 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20 text-stone-400"
              >
                <circle cx="6.5" cy="13" r="3.5" />
                <circle cx="17.5" cy="13" r="3.5" />
                <path d="M10 12h4" />
                <path d="M3 12l1.5-3h4" />
                <path d="M21 12l-1.5-3h-4" />
              </svg>
            </a>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Sunglasses</h3>
              <p className="text-indigo-600 font-bold mt-1">$19.99</p>
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="product.html"
                  className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  View Details
                </a>
                <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L19 7H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
