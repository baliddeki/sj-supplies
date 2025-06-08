import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="bg-gray-50 border-t border-[#f0f2f5] font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]"
      style={{ fontFamily: `"Work Sans", "Noto Sans", sans-serif` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Logo/Blurb */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-base tracking-tight">SJ</span>
              </div>
              <span className="font-bold text-lg tracking-tight">SJ Pro Supplies</span>
            </div>
            <p className="text-[#60748a] text-sm leading-normal">
              Your trusted stationery partner in Uganda, providing quality supplies for schools, offices, and creatives.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 text-[#60748a] hover:text-amber-600 transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-[#60748a] hover:text-amber-600 transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-[#60748a] hover:text-amber-600 transition-colors" /></a>
            </div>
          </div>
          {/* Products */}
          <div>
            <h3 className="font-semibold text-[#111418] mb-4 text-base">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/school-supplies" className="text-[#60748a] hover:text-amber-600">School Supplies</Link></li>
              <li><Link href="/office-essentials" className="text-[#60748a] hover:text-amber-600">Office Essentials</Link></li>
              <li><Link href="/products" className="text-[#60748a] hover:text-amber-600">All Products</Link></li>
              <li><Link href="/custom-solutions" className="text-[#60748a] hover:text-amber-600">Custom Solutions</Link></li>
            </ul>
          </div>
          {/* About */}
          <div>
            <h3 className="font-semibold text-[#111418] mb-4 text-base">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[#60748a] hover:text-amber-600">Our Story</Link></li>
              <li><Link href="/bulk-orders" className="text-[#60748a] hover:text-amber-600">Bulk Orders</Link></li>
              <li><Link href="/contact" className="text-[#60748a] hover:text-amber-600">Contact Us</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#111418] mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm text-[#60748a]">
              <li>Kampala, Uganda</li>
              <li>+256 XXX XXX XXX</li>
              <li>info@sjsupplies.ug</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#f0f2f5] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#60748a] text-sm">&copy; 2024 SJ Pro Supplies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#60748a] hover:text-amber-600 text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-[#60748a] hover:text-amber-600 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
