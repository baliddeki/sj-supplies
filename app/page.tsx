import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-amber-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Trusted Stationery Partner in Uganda
              </h1>
              <p className="text-xl text-gray-600 mb-8">Quality and reliability for schools, offices, and artists</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Shop Now
              </Button>
            </div>
            <div className="relative">
              <div className="bg-amber-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Stationery supplies"
                      width={120}
                      height={120}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Office supplies"
                      width={120}
                      height={120}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Back to School Essentials", color: "bg-teal-100" },
              { title: "Office Productivity Boosters", color: "bg-gray-100" },
              { title: "Unleash Your Creativity", color: "bg-teal-200" },
              { title: "Student Success Packs", color: "bg-teal-100" },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${product.color} h-48 flex items-center justify-center`}>
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt={product.title}
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">{product.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-gray-900">Sarah K.</h4>
                    <span className="text-sm text-gray-500 ml-2">2 months ago</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Stationery Hub has been our go-to supplier for years. Their products are top-notch, and their
                    customer service is exceptional."
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <span>👍 2</span>
                    <span className="ml-4">💬 1</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-gray-900">David M.</h4>
                    <span className="text-sm text-gray-500 ml-2">2 months ago</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <p className="text-gray-600">
                    "Great selection of stationery at competitive prices. Delivery is always prompt and reliable."
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <span>👍 2</span>
                    <span className="ml-4">💬 0</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
