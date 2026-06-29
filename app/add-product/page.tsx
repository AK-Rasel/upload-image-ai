"use client";
import AddFrom from "@/components/addproductComponents/AddFrom";
import Preview from "@/components/addproductComponents/Preview";
import Tips from "@/components/addproductComponents/Tips";
import Image from "next/image";
import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(1);
  const [featured, setFeatured] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

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
        <AddFrom
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          stock={stock}
          setStock={setStock}
          featured={featured}
          setFeatured={setFeatured}
          imagePreview={imagePreview}
          handleImageChange={handleImageChange}
          adjustStock={adjustStock}
          handleSubmit={handleSubmit}
        />

        {/* ===== SIDEBAR ===== */}
        <div className="flex flex-col gap-6">
          {/* Preview */}
          <Preview
            title={title}
            price={price}
            description={description}
            category={category}
            stock={stock}
            featured={featured}
            imagePreview={imagePreview}
          />
          {/* Tips */}
          <Tips />
        </div>
      </div>
    </main>
  );
}
