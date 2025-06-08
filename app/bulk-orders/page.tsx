import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Truck, Users, Building, GraduationCap, Briefcase } from "lucide-react"

export default function BulkOrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 lg:p-16 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bulk Orders for Your Organization</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get the best deals on stationery supplies for schools, offices, and businesses with our bulk ordering
              service.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Request a Quote</Button>
          </div>
          <div className="absolute right-8 top-8 hidden lg:block">
            <div className="bg-amber-200 rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Bulk supplies"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Why Choose SJ Pro for Bulk Orders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose SJ Pro for Bulk Orders?</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Advantages</h3>
            <p className="text-gray-600 mb-6">
              SJ Pro is your trusted partner for all your stationery needs. We understand the unique requirements of
              organizations and are committed to providing a comprehensive range of high-quality products and
              exceptional service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <DollarSign className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Competitive Discounts</h4>
                <p className="text-sm text-gray-600">Significant savings on bulk purchases with tiered pricing</p>
              </Card>

              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Truck className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Delivery</h4>
                <p className="text-sm text-gray-600">Convenient delivery options to meet your schedule</p>
              </Card>

              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Dedicated Account Management</h4>
                <p className="text-sm text-gray-600">Personal account manager to handle all your needs</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Place a Bulk Order */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Place a Bulk Order</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit Your Request</h3>
                <p className="text-gray-600">Fill out our online form with your requirements</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Receive a Customized Quote</h3>
                <p className="text-gray-600">Our team will prepare a detailed quote based on your specific needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirm and Receive Your Order</h3>
                <p className="text-gray-600">Once approved, we'll process your order and arrange for timely delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Request a Bulk Order Quote */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Bulk Order Quote</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" placeholder="Your Organization Name" />
            </div>

            <div>
              <Label htmlFor="contact-name">Contact Person</Label>
              <Input id="contact-name" placeholder="Your Name" />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Your Phone Number" />
            </div>

            <div>
              <Label htmlFor="order-details">Order Details</Label>
              <Textarea
                id="order-details"
                placeholder="Please specify the items, quantities, and any special requirements for your bulk order"
                rows={4}
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Request</Button>
          </form>
        </section>

        {/* Organizations We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Organizations We Serve</h2>
          <p className="text-gray-600 mb-8">
            SJ Pro proudly supplies stationery to a wide range of organizations, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Building className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Businesses</h3>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Schools & Universities</h3>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Government Organizations</h3>
            </Card>
          </div>
        </section>

        {/* Downloadable Order Form */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Order Form (Optional)</h2>
          <p className="text-gray-600 mb-6">
            For your convenience, you can also download our order form and submit it via email.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Download Order Form
          </Button>
        </section>
      </div>
    </div>
  )
}
