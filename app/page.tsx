import TitleRow from "@/components/sub-components/TitleRow";
import Sidebar from "@/components/sub-components/Sidebar";
import Card from "@/components/sub-components/Card";
import AllData from "@/Data.json";

export default function ShopStore() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* Title row */}
      <TitleRow />

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wireless Headphone */}

          {AllData?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
