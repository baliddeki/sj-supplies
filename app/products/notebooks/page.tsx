import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function NotebookDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">Products {">"} Notebooks</nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Premium Hardcover Notebook"
                width={200}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-amber-100 rounded-lg p-4 flex items-center justify-center aspect-square">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt={`Product view ${i + 1}`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Premium Hardcover Notebook</h1>
            <p className="text-gray-600">Superior paper quality for your writing needs</p>

            {/* Product Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Cover Material:</span>
                  <span className="ml-2 text-gray-900">Hardcover</span>
                </div>
                <div>
                  <span className="text-gray-500">Size:</span>
                  <span className="ml-2 text-gray-900">A5</span>
                </div>
                <div>
                  <span className="text-gray-500">Number of Pages:</span>
                  <span className="ml-2 text-gray-900">200</span>
                </div>
                <div>
                  <span className="text-gray-500">Ruling Style:</span>
                  <span className="ml-2 text-gray-900">Lined</span>
                </div>
                <div>
                  <span className="text-gray-500">Paper Weight:</span>
                  <span className="ml-2 text-gray-900">80 GSM</span>
                </div>
                <div>
                  <span className="text-gray-500">Binding:</span>
                  <span className="ml-2 text-gray-900">Thread Bound</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">ADD TO CART</Button>

            {/* Customer Reviews */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">4.5</div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="text-sm text-gray-500">Based on 124 reviews</div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-gray-900">Sarah K.</span>
                        <span className="text-sm text-gray-500 ml-2">2 months ago</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        This notebook is fantastic! The paper is smooth and thick, perfect for fountain pens. The cover
                        is durable. Very happy with this purchase!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-gray-900">David M.</span>
                        <span className="text-sm text-gray-500 ml-2">1 month ago</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-3 h-3 text-gray-300" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Great quality for the price. The paper quality is good and the cover is durable. Only downside
                        is that it's a bit heavy to carry around.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Related Products */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Related Products</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Colored Pen Set", image: "/placeholder.svg?height=80&width=80" },
                  { name: "Adhesive Sticky Notes", image: "/placeholder.svg?height=80&width=80" },
                  { name: "Compact Desk Organizer", image: "/placeholder.svg?height=80&width=80" },
                ].map((product, index) => (
                  <Card key={index} className="p-3">
                    <div className="bg-gray-100 rounded p-2 mb-2 flex items-center justify-center aspect-square">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xs font-medium text-gray-900">{product.name}</h4>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
