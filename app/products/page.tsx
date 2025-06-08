import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Notebooks", description: "High-quality notebooks for your writing needs", color: "bg-orange-100" },
  { name: "Pens", description: "Smooth writing pens in various colors", color: "bg-gray-100" },
  { name: "Paper", description: "Premium types of paper for printing and writing", color: "bg-gray-50" },
  { name: "Adhesives", description: "Strong adhesives for various applications", color: "bg-green-100" },
  { name: "Calculators", description: "Reliable calculators for students and professionals", color: "bg-yellow-100" },
  { name: "Rulers", description: "Rulers for precise measurements", color: "bg-teal-100" },
  { name: "Erasers", description: "Effective erasers for clean corrections", color: "bg-orange-100" },
  { name: "Pencils", description: "Pencils for sketching and writing", color: "bg-gray-100" },
  { name: "Markers", description: "Permanent and whiteboard markers", color: "bg-gray-100" },
  { name: "Highlighters", description: "Highlighters for marking important text", color: "bg-orange-100" },
  { name: "Scissors", description: "Scissors for cutting paper and other materials", color: "bg-teal-100" },
  { name: "Tape", description: "Tape and strong adhesive tape", color: "bg-yellow-100" },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Products</h1>
          <p className="text-gray-600">Explore our wide range of stationery supplies</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          <Button variant="ghost" className="border-b-2 border-blue-600 text-blue-600 rounded-none">
            School
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-none">
            Office
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-none">
            Inks
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-none">
            Art
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-none">
            Wallpapers
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={`/products/${product.name.toLowerCase()}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`${product.color} h-32 flex items-center justify-center`}>
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <Button variant="ghost" size="sm">
            {"<"}
          </Button>
          <Button variant="ghost" size="sm" className="bg-blue-600 text-white">
            1
          </Button>
          <Button variant="ghost" size="sm">
            2
          </Button>
          <Button variant="ghost" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm">
            4
          </Button>
          <Button variant="ghost" size="sm">
            5
          </Button>
          <Button variant="ghost" size="sm">
            {">"}
          </Button>
        </div>
      </div>
    </div>
  )
}
