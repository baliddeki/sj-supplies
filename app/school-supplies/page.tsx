import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const schoolProducts = [
  {
    name: "Ballpoint Pens",
    description: "Smooth writing, long-lasting ink",
    img: "/images/school-supplies/ballpoint-pens.png",
  },
  {
    name: "Spiral Notebooks",
    description: "Durable, lined pages",
    img: "/images/school-supplies/spiral-notebooks.png",
  },
  {
    name: "Math Sets",
    description: "Complete set for geometry",
    img: "/images/school-supplies/math-sets.png",
  },
  {
    name: "Colored Pencils",
    description: "Vibrant colors, smooth application",
    img: "/images/school-supplies/colored-pencils.png",
  },
  {
    name: "Rulers",
    description: "Accurate measurements",
    img: "/images/school-supplies/rulers.png",
  },
  {
    name: "Erasers",
    description: "Clean erasing, no smudging",
    img: "/images/school-supplies/erasers.png",
  },
];

const subcategories = ["Pens", "Books", "Geometry Sets"];

export default function SchoolSuppliesPage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title & Description */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-[#111418] mb-2 tracking-tight">
            School Supplies
          </h1>
          <p className="text-[#60748a] text-xs md:text-base max-w-2xl">
            Equip students for success with our comprehensive range of school
            supplies. From notebooks to pens, we offer everything needed for a
            productive learning environment.
          </p>
        </div>

        {/* Subcategories */}
        <div className="mb-10">
          <h2 className="text-base md:text-lg font-semibold text-[#111418] mb-3">
            Subcategories
          </h2>
          <div className="flex flex-wrap gap-2">
            {subcategories.map((sub) => (
              <Button
                key={sub}
                variant="outline"
                size="sm"
                className="rounded-full border-[#f0f2f5] text-[#60748a] hover:text-[#0c77f2] hover:border-[#0c77f2] px-4 text-xs md:text-sm"
              >
                {sub}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-base md:text-lg font-semibold text-[#111418] mb-4">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {schoolProducts.map((product, index) => (
              <Link
                key={index}
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="group"
              >
                <Card className="bg-white border border-[#f0f2f5] rounded-xl hover:shadow-lg transition-shadow cursor-pointer flex flex-col p-0">
                  <div className="relative w-full aspect-square rounded-t-xl overflow-hidden min-h-[160px]">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <CardContent className="p-3 flex-1 flex flex-col text-left">
                    <h3 className="font-semibold text-[#111418] text-base mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#60748a]">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
