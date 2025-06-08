import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">SJ Supplies</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted stationery partner in Uganda, providing quality supplies for schools, offices, and creative
              professionals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/school-supplies" className="text-gray-600 hover:text-amber-600">
                  School Supplies
                </Link>
              </li>
              <li>
                <Link href="/office-essentials" className="text-gray-600 hover:text-amber-600">
                  Office Essentials
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/custom-solutions" className="text-gray-600 hover:text-amber-600">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-600">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="text-gray-600 hover:text-amber-600">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Kampala, Uganda</li>
              <li>+256 XXX XXX XXX</li>
              <li>info@sjsupplies.ug</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 SJ Supplies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-amber-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-amber-600 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
