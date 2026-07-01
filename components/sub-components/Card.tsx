/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import type { Product } from "@/lib/redux/slices/productsSlice";

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   brand: string;
//   stock: number;
//   rating: number;
//   reviews: number;
//   featured: boolean;
//   image: string;
// };

type CardProps = {
  product: Product;
};

export default function Card({ product }: CardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div
        // href={`/product/${product.id}`}
        className="relative block h-48 bg-indigo-50 flex items-center justify-center overflow-hidden"
      >
        <img src={product.image} alt={product.title} className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">
          {product.title}
        </h3>

        <p className="text-indigo-600 font-bold mt-1">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">{product.category}</span>

          <span className="text-xs text-amber-500">⭐ {product.rating}</span>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button
            // href={`/product/${product.id}`}
            className="flex-1 text-center border border-indigo-200 text-indigo-600 font-medium text-sm py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            View Details
          </button>

          <button
            type="button"
            className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
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
  );
}
