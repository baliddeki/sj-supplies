import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Printer, GraduationCap, CreditCard } from "lucide-react"

export default function CustomSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Stationery Solutions</h1>
          <p className="text-gray-600">
            Create your brand with our bespoke stationery services. From personalized notebooks to custom-printed
            business cards, we offer a range of solutions to meet your unique needs.
          </p>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Edit className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Branded Notebooks</h3>
              <p className="text-sm text-gray-600">Custom notebooks with your logo and branding</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Printer className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Printing</h3>
              <p className="text-sm text-gray-600">Professional printing services for all materials</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">School Branding</h3>
              <p className="text-sm text-gray-600">Custom school supplies with institutional branding</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <CreditCard className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Cards</h3>
              <p className="text-sm text-gray-600">Professional business cards and corporate stationery</p>
            </Card>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt={`Gallery item ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Request a Quote Form */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Request a Quote</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Your Phone Number" />
              </div>
            </div>

            <div>
              <Label htmlFor="order-type">Order Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Order Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="notebooks">Custom Notebooks</SelectItem>
                  <SelectItem value="printing">Custom Printing</SelectItem>
                  <SelectItem value="business-cards">Business Cards</SelectItem>
                  <SelectItem value="school-branding">School Branding</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="specifications">Specifications</Label>
              <Textarea id="specifications" placeholder="Your Specifications" rows={4} />
            </div>

            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" placeholder="Order Quantity" />
            </div>

            <div>
              <Label htmlFor="upload">Upload File</Label>
              <Input id="upload" type="file" />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Request</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
