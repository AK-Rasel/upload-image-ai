export default function Tips() {
  return (
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
  );
}
