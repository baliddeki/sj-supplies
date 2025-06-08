import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const schoolProducts = [
  { name: "Ballpoint Pens", description: "Smooth writing, long-lasting ink", color: "bg-teal-100" },
  { name: "Spiral Notebooks", description: "Durable, lined pages", color: "bg-orange-100" },
  { name: "Math Sets", description: "Complete set for geometry", color: "bg-teal-200" },
  { name: "Colored Pencils", description: "Vibrant colors, smooth application", color: "bg-gray-100" },
  { name: "Rulers", description: "Accurate measurements", color: "bg-amber-100" },
  { name: "Erasers", description: "Clean erasing, no smudging", color: "bg-orange-100" },
]

export default function SchoolSuppliesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Supplies</h1>
          <p className="text-gray-600">
            Equip students for success with our comprehensive range of school supplies. From notebooks to pens, we offer
            everything needed for a productive learning environment.
          </p>
        </div>

        {/* Subcategories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Subcategories</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Pens
            </Button>
            <Button variant="outline" size="sm">
              Books
            </Button>
            <Button variant="outline" size="sm">
              Geometry Sets
            </Button>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {schoolProducts.map((product, index) => (
              <Link key={index} href={`/products/${product.name.toLowerCase().replace(" ", "-")}`}>
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
        </div>

        {/* Additional Product - Erasers */}
        <div className="mb-12">
          <Card className="overflow-hidden max-w-xs">
            <div className="bg-orange-100 h-32 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Erasers"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Erasers</h3>
              <p className="text-sm text-gray-600">Clean erasing, no smudging</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-8 mt-16 pt-8 border-t border-gray-200">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
            Terms of Service
          </Link>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">© 2024 Stationery Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
