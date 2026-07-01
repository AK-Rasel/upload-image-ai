"use client";
import { useEffect, useMemo } from "react";
import Sidebar from "@/components/sub-components/Sidebar";
import Card from "@/components/sub-components/Card";
import TitleRow from "@/components/sub-components/TitleRow";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setProducts, type Product } from "@/lib/redux/slices/productsSlice";
import {
  setCategory,
  setMinPrice,
  setSortBy,
  setSearchQuery,
} from "@/lib/redux/slices/filtersSlice";

export default function ShopContent({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const dispatch = useAppDispatch();

  const { items: products } = useAppSelector((state) => state.products);
  const { selectedCategory, minPrice, maxPrice, sortBy, searchQuery } =
    useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(setProducts(initialProducts));
  }, [initialProducts, dispatch]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q),
      );
    }

    if (selectedCategory !== "All Products") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

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
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    }

    return result;
  }, [products, selectedCategory, minPrice, maxPrice, sortBy, searchQuery]);

  return (
    <>
      <TitleRow
        searchQuery={searchQuery}
        setSearchQuery={(val) => dispatch(setSearchQuery(val))}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <Sidebar
          categoryCounts={categoryCounts}
          totalCount={products.length}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => dispatch(setCategory(cat))}
          minPrice={minPrice}
          setMinPrice={(val) => dispatch(setMinPrice(val))}
          maxPrice={maxPrice}
          sortBy={sortBy}
          setSortBy={(val) => dispatch(setSortBy(val))}
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
