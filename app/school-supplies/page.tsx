import { SectionHeading, Body } from "@/components/shared/Typography";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

const schoolProducts = [
  { name: "Ballpoint Pens", description: "Smooth writing, long-lasting ink", img: "/images/school-supplies/ballpoint-pens.png" },
  { name: "Spiral Notebooks", description: "Durable, lined pages", img: "/images/school-supplies/spiral-notebooks.png" },
  { name: "Math Sets", description: "Complete set for geometry", img: "/images/school-supplies/math-sets.png" },
  { name: "Colored Pencils", description: "Vibrant colors, smooth application", img: "/images/school-supplies/colored-pencils.png" },
  { name: "Rulers", description: "Accurate measurements", img: "/images/school-supplies/rulers.png" },
  { name: "Erasers", description: "Clean erasing, no smudging", img: "/images/school-supplies/erasers.png" },
];

const subcategories = ["Pens", "Books", "Geometry Sets"];

export default function SchoolSuppliesPage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading>School Supplies</SectionHeading>
        <Body className="mb-6 max-w-2xl">
          Equip students for success with our comprehensive range of school supplies. From notebooks to pens, we offer everything needed for a productive learning environment.
        </Body>

        {/* Subcategories */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-[#111418] mb-3">Subcategories</h2>
          <div className="flex flex-wrap gap-2">
            {subcategories.map((sub) => (
              <Button
                key={sub}
                variant="outline"
                size="sm"
                className="rounded-full border-[#f0f2f5] text-[#60748a] hover:text-[#0c77f2] hover:border-[#0c77f2] px-4"
              >
                {sub}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-[#111418] mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {schoolProducts.map((product) => (
              <ProductCard
                key={product.name}
                img={product.img}
                title={product.name}
                description={product.description}
                href={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
