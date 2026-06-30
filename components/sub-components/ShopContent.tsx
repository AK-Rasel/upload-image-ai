"use client";
import { useState, useMemo } from "react";
import Sidebar from "@/components/sub-components/Sidebar";
import Card from "@/components/sub-components/Card";
import TitleRow from "@/components/sub-components/TitleRow";

type Product = {
  _id: string;
  title: string;
  price: number;
  category: string;
  [key: string]: any;
};

export default function ShopContent({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [minPrice, setMinPrice] = useState(10);
  const [sortBy, setSortBy] = useState("Newest First");
  const [searchQuery, setSearchQuery] = useState("");

  const MAX_PRICE = 1000;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // search filter — title ba category diye match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q),
      );
    }

    // category filter
    if (selectedCategory !== "All Products") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // price filter
    result = result.filter((p) => p.price >= minPrice && p.price <= MAX_PRICE);

    // sort
    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Most Popular":
        result.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        break;
      case "Newest First":
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
    }

    return result;
  }, [products, selectedCategory, minPrice, sortBy, searchQuery]);

  return (
    <>
      <TitleRow searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <Sidebar
          categoryCounts={categoryCounts}
          totalCount={products.length}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={MAX_PRICE}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 content-start">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product._id} product={product} />
            ))
          ) : (
            <p className="text-gray-400 text-sm col-span-full text-center py-10">
              No products found matching your search/filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
