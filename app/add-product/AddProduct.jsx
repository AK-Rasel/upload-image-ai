import Image from "next/image";
import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(1);
  const [featured, setFeatured] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const adjustStock = (delta) => {
    setStock((prev) => Math.max(0, prev + delta));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your API call.
    console.log({ title, price, description, category, stock, featured });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add Product</h1>
        <p className="text-gray-500 mt-1">
          Add a new product to your collection
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ===== FORM ===== */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Image upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Product Image <span className="text-red-500">*</span>
              </label>
              <label
                htmlFor="photo-input"
                className="flex flex-col items-center justify-center gap-2 h-44 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition text-center px-4 overflow-hidden"
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Product preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-indigo-500"
                    >
                      <path d="M12 19V5" />
                      <path d="M5 12l7-7 7 7" />
                    </svg>
                    <span
                      id="photo-label"
                      className="text-indigo-600 font-medium text-sm"
                    >
                      Upload product image
                    </span>
                    <span className="text-gray-400 text-xs">
                      PNG, JPG up to 5MB
                    </span>
                  </>
                )}
                <input
                  id="photo-input"
                  type="file"
                  accept="image/png, image/jpeg"
                  className="sr-only"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* Title + Price */}
            <div className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter product title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition">
                  <span className="flex items-center px-3 bg-gray-50 border-r border-gray-200 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition resize-none"
            ></textarea>
          </div>

          {/* Category + Stock */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
                >
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Bags</option>
                  <option>Footwear</option>
                  <option>Accessories</option>
                </select>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition">
                <input
                  id="stock"
                  type="number"
                  min="0"
                  value={stock}
                  onChange={(e) =>
                    setStock(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-full px-4 py-2.5 text-sm focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                />
                <div className="flex flex-col border-l border-gray-200">
                  <button
                    type="button"
                    id="stock-up"
                    onClick={() => adjustStock(1)}
                    className="flex-1 px-2.5 hover:bg-gray-50 text-gray-500 transition"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                    >
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    id="stock-down"
                    onClick={() => adjustStock(-1)}
                    className="flex-1 px-2.5 hover:bg-gray-50 text-gray-500 border-t border-gray-200 transition"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-start gap-3 mb-8">
            <input
              id="featured"
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="mt-0.5 w-5 h-5 rounded border-gray-300 accent-indigo-600 cursor-pointer"
            />
            <label htmlFor="featured" className="cursor-pointer">
              <span className="block text-sm font-medium text-gray-800">
                Featured Product
              </span>
              <span className="block text-xs text-gray-400 mt-0.5">
                Show this product on the homepage
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition"
            >
              Add Product
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
            </button>
          </div>
        </form>

        {/* ===== SIDEBAR ===== */}
        <div className="flex flex-col gap-6">
          {/* Preview */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-4">Preview</h3>
            <div className="flex gap-4">
              <div
                id="preview-img"
                className="w-24 h-24 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 overflow-hidden"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-indigo-300"
                  >
                    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                    <rect x="2" y="14" width="5" height="7" rx="1.5" />
                    <rect x="17" y="14" width="5" height="7" rx="1.5" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  id="preview-title"
                  className="font-semibold text-gray-900 truncate"
                >
                  {title || "Product Title"}
                </p>
                <p
                  id="preview-price"
                  className="text-indigo-600 font-bold mt-0.5"
                >
                  ${price ? Number(price).toFixed(2) : "0.00"}
                </p>
                <p
                  id="preview-desc"
                  className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-3"
                >
                  {description ||
                    "This is a short description of the product. It will appear on the product card."}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-gray-500 mb-1.5">
                Category
              </p>
              <span
                id="preview-category"
                className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {category || "Category Name"}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Stock:{" "}
              <span id="preview-stock" className="font-bold text-gray-900">
                {stock}
              </span>
            </p>
          </div>

          {/* Tips */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8h.01" />
                  <path d="M11 11h1v5" />
                </svg>
              </span>
              <h3 className="font-bold text-gray-900">Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside marker:text-indigo-400">
              <li>Use clear and high-quality product images</li>
              <li>Write a detailed description to help customers</li>
              <li>Set the right price for your product</li>
              <li>Keep your stock quantity updated</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
