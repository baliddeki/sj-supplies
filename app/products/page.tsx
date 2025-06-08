import { SectionHeading, Body } from "@/components/shared/Typography";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Notebooks", description: "High-quality notebooks for your writing needs", img: "/images/products/notebooks.png" },
  { name: "Pens", description: "Smooth writing pens in various colors", img: "/images/products/pen.png" },
  { name: "Paper", description: "Premium types of paper for printing and writing", img: "/images/products/paper.png" },
  { name: "Adhesives", description: "Strong adhesives for various applications", img: "/images/products/adhesives.png" },
  { name: "Calculators", description: "Reliable calculators for students and professionals", img: "/images/products/calculator.png" },
  { name: "Rulers", description: "Rulers for precise measurements", img: "/images/products/ruler.png" },
  { name: "Erasers", description: "Effective erasers for clean corrections", img: "/images/products/erasers.png" },
  { name: "Pencils", description: "Pencils for sketching and writing", img: "/images/products/pencil.png" },
  { name: "Markers", description: "Permanent and whiteboard markers", img: "/images/products/markers.png" },
  { name: "Highlighters", description: "Highlighters for marking important text", img: "/images/products/highlighters.png" },
  { name: "Scissors", description: "Scissors for cutting paper and other materials", img: "/images/products/scissor.png" },
  { name: "Tape", description: "Tape and strong adhesive tape", img: "/images/products/tape.png" },
];

const categories = [
  { name: "School", active: true },
  { name: "Office", active: false },
  { name: "Inks", active: false },
  // { name: "Art", active: false },
  { name: "Wallpapers", active: false },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading>Products</SectionHeading>
        <Body className="mb-6">Explore our wide range of stationery supplies</Body>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-10 border-b border-[#f0f2f5]">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant="ghost"
              className={
                (cat.active
                  ? "border-b-2 border-[#0c77f2] text-[#0c77f2] font-semibold "
                  : "text-[#60748a] hover:text-[#0c77f2] ") +
                "rounded-none px-5 py-1.5 text-sm transition-colors"
              }
              style={{ boxShadow: "none" }}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              img={product.img}
              title={product.name}
              description={product.description}
              href={`/products/${product.name.toLowerCase()}`}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button variant="ghost" size="sm" className="rounded-full text-[#60748a] hover:text-[#0c77f2]">
            {"<"}
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-[#0c77f2] text-white font-bold shadow-none">
            1
          </Button>
          {[2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              className="rounded-full text-[#60748a] hover:text-[#0c77f2] shadow-none"
            >
              {page}
            </Button>
          ))}
          <Button variant="ghost" size="sm" className="rounded-full text-[#60748a] hover:text-[#0c77f2]">
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}
