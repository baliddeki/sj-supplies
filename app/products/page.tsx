import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
]

const categories = [
  { name: "School", active: true },
  { name: "Office", active: false },
  { name: "Inks", active: false },
  // { name: "Art", active: false },
  { name: "Wallpapers", active: false },
]

export default function ProductsPage() {
  return (
    <div
      className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]"
      style={{ fontFamily: `"Work Sans", "Noto Sans", sans-serif` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111418] mb-2 tracking-tight">Products</h1>
          <p className="text-[#60748a] text-base">Explore our wide range of stationery supplies</p>
        </div>

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
          {products.map((product, index) => (
            <Link key={index} href={`/products/${product.name.toLowerCase()}`} className="group">
              <Card className="bg-white border border-[#f0f2f5] rounded-xl hover:shadow-lg transition-shadow cursor-pointer flex flex-col p-0">
                <div className="relative w-full aspect-square rounded-t-xl overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col text-left">
                  <h3 className="font-semibold text-[#111418] text-base mb-1">{product.name}</h3>
                  <p className="text-sm text-[#60748a]">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
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
  )
}
