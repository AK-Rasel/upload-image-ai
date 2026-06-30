import ShopContent from "@/components/sub-components/ShopContent";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ShopStore() {
  const data = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <ShopContent products={data.products} />
    </div>
  );
}
