"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SJ</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">SJ Supplies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium">
              Products
            </Link>
            <Link href="/school-supplies" className="text-gray-700 hover:text-amber-600 font-medium">
              School Supplies
            </Link>
            <Link href="/office-essentials" className="text-gray-700 hover:text-amber-600 font-medium">
              Office Essentials
            </Link>
            <Link href="/custom-solutions" className="text-gray-700 hover:text-amber-600 font-medium">
              Custom Solutions
            </Link>
            <Link href="/bulk-orders" className="text-gray-700 hover:text-amber-600 font-medium">
              Bulk Orders
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="search" placeholder="Search" className="pl-10 w-64" />
              </div>
            </div>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="sm:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input type="search" placeholder="Search" className="pl-10 w-full" />
                </div>
              </div>
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium">
                Products
              </Link>
              <Link href="/school-supplies" className="text-gray-700 hover:text-amber-600 font-medium">
                School Supplies
              </Link>
              <Link href="/office-essentials" className="text-gray-700 hover:text-amber-600 font-medium">
                Office Essentials
              </Link>
              <Link href="/custom-solutions" className="text-gray-700 hover:text-amber-600 font-medium">
                Custom Solutions
              </Link>
              <Link href="/bulk-orders" className="text-gray-700 hover:text-amber-600 font-medium">
                Bulk Orders
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
