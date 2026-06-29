import { Dispatch, SetStateAction, ChangeEvent, FormEvent } from "react";

type AddFormProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  price: string;
  setPrice: Dispatch<SetStateAction<string>>;

  description: string;
  setDescription: Dispatch<SetStateAction<string>>;

  category: string;
  setCategory: Dispatch<SetStateAction<string>>;

  brand: string;
  setBrand: Dispatch<SetStateAction<string>>;

  stock: number;
  setStock: Dispatch<SetStateAction<number>>;

  featured: boolean;
  setFeatured: Dispatch<SetStateAction<boolean>>;

  imagePreview: string | null;

  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;

  adjustStock: (delta: number) => void;

  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isAnalyzing: boolean;
  isSubmitting: boolean;
  errors: {
    title?: string;
    price?: string;
    description?: string;
    category?: string;
    brand?: string;
    image?: string;
  };
};

function AddFrom({
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  category,
  setCategory,
  brand,
  setBrand,
  stock,
  setStock,
  featured,
  setFeatured,
  imagePreview,
  handleImageChange,
  adjustStock,
  handleSubmit,
  isAnalyzing,
  isSubmitting,
  errors,
}: AddFormProps) {
  return (
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
            className="relative flex flex-col items-center justify-center gap-2 h-44 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition text-center px-4 overflow-hidden"
          >
            {imagePreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
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

            {isAnalyzing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 backdrop-blur-sm text-white">
                <svg
                  className="w-7 h-7 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span className="text-xs font-medium px-3 text-center animate-pulse">
                  🤖 AI is reading the image...
                </span>
              </div>
            )}

            <input
              id="photo-input"
              type="file"
              accept="image/png, image/jpeg"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
          {errors.image && (
            <p className="text-red-500 text-xs mt-1.5">{errors.image}</p>
          )}
        </div>

        {/* Title + Brand + Price */}
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
              className={`w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition ${
                errors.title
                  ? "border-red-300 focus:ring-red-100 focus:border-red-400"
                  : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1.5">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Brand <span className="text-red-500">*</span>
            </label>
            <input
              id="brand"
              type="text"
              placeholder="Enter brand name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition ${
                errors.brand
                  ? "border-red-300 focus:ring-red-100 focus:border-red-400"
                  : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
              }`}
            />
            {errors.brand && (
              <p className="text-red-500 text-xs mt-1.5">{errors.brand}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Price <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex rounded-lg border overflow-hidden focus-within:ring-2 transition ${
                errors.price
                  ? "border-red-300 focus-within:ring-red-100 focus-within:border-red-400"
                  : "border-gray-200 focus-within:ring-indigo-100 focus-within:border-indigo-400"
              }`}
            >
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
            {errors.price && (
              <p className="text-red-500 text-xs mt-1.5">{errors.price}</p>
            )}
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
          rows={4}
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition resize-none ${
            errors.description
              ? "border-red-300 focus:ring-red-100 focus:border-red-400"
              : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
          }`}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-xs mt-1.5">{errors.description}</p>
        )}
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
              className={`w-full appearance-none rounded-lg border px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 transition ${
                errors.category
                  ? "border-red-300 focus:ring-red-100 focus:border-red-400"
                  : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
              }`}
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
          {errors.category && (
            <p className="text-red-500 text-xs mt-1.5">{errors.category}</p>
          )}
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
          disabled={isSubmitting}
          className="cursor-pointer inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Saving..." : "Add Product"}
          {!isSubmitting && (
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
          )}
        </button>
      </div>
    </form>
  );
}

export default AddFrom;
