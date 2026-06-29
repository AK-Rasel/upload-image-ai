"use client";
import AddFrom from "@/components/addproductComponents/AddFrom";
import Preview from "@/components/addproductComponents/Preview";
import Tips from "@/components/addproductComponents/Tips";
import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(1);
  const [featured, setFeatured] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [errors, setErrors] = useState<{
    title?: string;
    price?: string;
    description?: string;
    category?: string;
    brand?: string;
    image?: string;
  }>({});

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const analyzeImageWithAI = async (file: File) => {
    setIsAnalyzing(true);
    setAiError(null);
    try {
      const base64 = await fileToBase64(file);
      const res = await fetch("/api/ai-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, mimeType: file.type }),
      });
      if (!res.ok) throw new Error("AI analysis failed");

      const data = await res.json();
      setTitle(data.title ?? "");
      setDescription(data.description ?? "");
      setCategory(data.category ?? "");
      setBrand(data.brand ?? "");
    } catch (err) {
      console.error(err);
      setAiError("AI auto-fill failed — please fill the form manually.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const uploadImageToImgbb = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/imgbb-upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Image upload failed");

      const data = await res.json();
      setImagePreview(data.url);
    } catch (err) {
      console.error(err);
      setAiError("Image upload failed — try again.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrors((prev) => ({ ...prev, image: undefined }));

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);

    uploadImageToImgbb(file);
    analyzeImageWithAI(file);
  };

  const adjustStock = (delta: number) => {
    setStock((prev) => Math.max(0, prev + delta));
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!price || Number(price) <= 0) newErrors.price = "Enter a valid price";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!category) newErrors.category = "Please select a category";
    if (!brand.trim()) newErrors.brand = "Brand is required";
    if (!imagePreview) newErrors.image = "Product image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setAiError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
          brand,
          stock,
          featured,
          image: imagePreview,
        }),
      });

      if (!res.ok) throw new Error("Failed to save product");

      await res.json();

      // ✅ success — sob input reset/empty koro
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setBrand("");
      setStock(1);
      setFeatured(true);
      setImagePreview(null);
      setErrors({});
      setSuccessMsg("✅ Product added successfully!");
    } catch (err) {
      console.error(err);
      setAiError("Failed to save product — try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add Product</h1>
        <p className="text-gray-500 mt-1">
          Add a new product to your collection
        </p>
        {isAnalyzing && (
          <p className="text-indigo-600 text-sm mt-2 animate-pulse">
            🤖 AI is reading the image and filling the form...
          </p>
        )}
        {aiError && <p className="text-red-500 text-sm mt-2">{aiError}</p>}
        {successMsg && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            {successMsg}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AddFrom
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          stock={stock}
          setStock={setStock}
          featured={featured}
          setFeatured={setFeatured}
          imagePreview={imagePreview}
          handleImageChange={handleImageChange}
          adjustStock={adjustStock}
          handleSubmit={handleSubmit}
          isAnalyzing={isAnalyzing}
          isSubmitting={isSubmitting}
          errors={errors}
        />

        <div className="flex flex-col gap-6">
          <Preview
            title={title}
            price={price}
            description={description}
            category={category}
            brand={brand}
            stock={stock}
            featured={featured}
            imagePreview={imagePreview}
          />
          <Tips />
        </div>
      </div>
    </main>
  );
}
