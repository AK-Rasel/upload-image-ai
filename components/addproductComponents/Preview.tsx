type PreviewProps = {
  title: string;
  price: string | number;
  description: string;
  category: string;
  stock: string | number;
  featured: boolean;
  imagePreview: string | null;
};

export default function Preview({
  title,
  price,
  description,
  category,
  stock,
  featured,
  imagePreview,
}: PreviewProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5">
      <h3 className="font-bold text-gray-900 mb-4">Preview</h3>

      <div className="flex gap-4">
        <div
          id="preview-img"
          className="relative w-24 h-24 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 overflow-hidden"
        >
          {imagePreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imagePreview}
              alt="Product preview"
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
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

          <p id="preview-price" className="text-indigo-600 font-bold mt-0.5">
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
        <p className="text-xs font-medium text-gray-500 mb-1.5">Category</p>

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
          {stock || 0}
        </span>
      </p>

      {featured && (
        <span className="inline-block mt-3 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Featured
        </span>
      )}
    </div>
  );
}
