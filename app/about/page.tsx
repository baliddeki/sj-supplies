import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-right mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Shop Now</Button>
        </div>

        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About SJ PRO SUPPLIES</h1>
            <p className="text-gray-600 leading-relaxed">
              SJ PRO SUPPLIES is a leading stationery wholesale supplier in Uganda, dedicated to providing high-quality
              products to businesses and institutions across the country. Our mission is to empower our customers with
              the tools they need to succeed, fostering creativity, productivity, and efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              Since our inception, we are guided by a set of core values that shape our operations and interactions. We
              are committed to integrity, ensuring transparency and honesty in all our dealings. We prioritize quality,
              sourcing products from reputable manufacturers that meet the highest standards. We value customer
              satisfaction, striving to exceed expectations with exceptional service and support. Innovation drives us
              to continuously improve and adapt to the evolving needs of our customers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team is composed of experienced professionals with a deep understanding of the stationery industry. We
              are passionate about providing expert advice and personalized solutions to our customers. Our
              collaborative approach ensures that we work together to deliver the best possible outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Kampala, our central location allows us to efficiently serve customers throughout
              Uganda. Our warehouse is well-stocked with a wide range of stationery products, ensuring prompt delivery
              and availability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unique Selling Points</h2>
            <p className="text-gray-600 leading-relaxed">
              SJ PRO SUPPLIES stands out in the market due to our commitment to quality, competitive pricing, and
              exceptional customer service. We offer a diverse product range, catering to various needs and budgets. Our
              efficient logistics and distribution network ensure timely delivery, and our dedicated support team is
              always ready to assist with any inquiries or concerns.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center space-x-12 mt-16 pt-8 border-t border-gray-200">
          <a href="/products" className="text-gray-500 hover:text-gray-700">
            Products
          </a>
          <a href="/about" className="text-gray-500 hover:text-gray-700">
            About Us
          </a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">
            Contact
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">© 2024 SJ PRO SUPPLIES. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
