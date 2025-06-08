import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OfficeEssentialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative bg-gray-200 rounded-2xl p-8 lg:p-16 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your One-Stop Shop for Office Supplies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are all about quality office essentials and tools for client service optimization.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Shop Now</Button>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Top 10 Office Supplies Every Business Needs</h3>
              <p className="text-gray-600 mb-4">
                Discover the essential office supplies that can boost productivity and keep your business running
                smoothly.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read More
              </Link>
            </div>
            <div className="bg-amber-100 rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Office supplies"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-100 rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Productivity tools"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Boost Productivity with the Right Stationery</h3>
              <p className="text-gray-600 mb-4">
                Learn how the right stationery and office supplies can significantly improve your workplace efficiency.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* Announcements & Promotions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Announcements & Promotions</h2>
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 bg-amber-200 p-8 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Special offer"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Offer: 20% Off All Notebooks</h3>
                  <p className="text-gray-600 mb-4">
                    Save big on high-quality notebooks for your office. Limited time offer - don't miss out!
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">Shop Now</Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 bg-gray-200 p-8 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="New product"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    New Product Alert: Ergonomic Office Chairs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Introducing our new range of ergonomic office chairs designed for comfort and productivity.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">Shop Now</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Educational Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Educational Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choosing the Right Paper for Your Printer</h3>
              <p className="text-gray-600 mb-4">
                Understanding paper types and weights can help you make the best choice for your printing needs and save
                money.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read More
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Paper types"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-green-100 rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Workspace organization"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for Organizing Your Workspace</h3>
              <p className="text-gray-600 mb-4">
                Create a more efficient and pleasant work environment with these simple organization tips.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
