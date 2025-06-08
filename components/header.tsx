"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="bg-white border-b border-[#f0f2f5] sticky top-0 z-50 font-['Work_Sans','Noto_Sans',sans-serif]"
      style={{ fontFamily: `"Work Sans", "Noto Sans", sans-serif` }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-base tracking-tight">SJ</span>
            </div>
            <span className="font-bold text-[#111418] text-lg tracking-tight leading-tight">
              SJ Supplies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Products
            </Link>
            <Link href="/school-supplies" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              School Supplies
            </Link>
            <Link href="/office-essentials" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Office Essentials
            </Link>
            <Link href="/custom-solutions" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Custom Solutions
            </Link>
            <Link href="/bulk-orders" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Bulk Orders
            </Link>
            <Link href="/about" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#111418] text-sm font-medium leading-normal hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#60748a] w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 w-48 rounded-lg bg-[#f0f2f5] border-none text-[#111418] text-sm font-normal focus:outline-none focus:ring-0 focus:border-none placeholder:text-[#60748a]"
                />
              </div>
            </div>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-[#111418] hover:text-amber-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
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
          <div className="md:hidden border-t border-[#f0f2f5] py-4">
            <div className="flex flex-col gap-4">
              <div className="sm:hidden mb-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#60748a] w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-10 w-full rounded-lg bg-[#f0f2f5] border-none text-[#111418] text-sm font-normal focus:outline-none focus:ring-0 focus:border-none placeholder:text-[#60748a]"
                  />
                </div>
              </div>
              <Link href="/" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Products
              </Link>
              <Link href="/school-supplies" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                School Supplies
              </Link>
              <Link href="/office-essentials" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Office Essentials
              </Link>
              <Link href="/custom-solutions" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Custom Solutions
              </Link>
              <Link href="/bulk-orders" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Bulk Orders
              </Link>
              <Link href="/about" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-[#111418] text-base font-medium leading-normal hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
