import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="flex justify-center py-8">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ maxWidth: 820, height: 320 }}
        >
          <Image
            src="/images/landing-page/hero-header.png"
            alt="Stationery Hero"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 820px) 100vw, 820px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white px-4">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-center drop-shadow-lg">
              Your Trusted Stationery Partner in Uganda
            </h1>
            <p className="text-sm md:text-base mb-6 text-center drop-shadow">
              Quality and reliability for schools, offices, and artists.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm md:text-base font-semibold">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Back to School Essentials", img: "/images/landing-page/pencil-book.png" },
              { title: "Office Productivity Boosters", img: "/images/landing-page/clean-table.png" },
              { title: "Unleash Your Creativity", img: "/images/landing-page/pencil-tin.png" },
              { title: "Student Success Packs", img: "/images/landing-page/backpack.png" },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-start">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="rounded-xl object-cover mb-3"
                  style={{ width: 160, height: 160 }}
                  sizes="(max-width: 640px) 100vw, 160px"
                />
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            Customer Testimonials
          </h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="flex items-start gap-3">
              <Image
                src="/images/landing-page/female-user.png"
                alt="Sarah K."
                width={40}
                height={40}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 text-sm">
                    Sarah K.
                  </span>
                  <span className="text-xs text-gray-500">2 months ago</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  "Stationery Hub has been our go-to supplier for years. Their products are top-notch, and their customer service is exceptional!"
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>👍 5</span>
                  <span>💬 1</span>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex items-start gap-3">
              <Image
                src="/images/landing-page/male-user.png"
                alt="David M."
                width={40}
                height={40}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 text-sm">
                    David M.
                  </span>
                  <span className="text-xs text-gray-500">3 months ago</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  "Great selection of stationery at competitive prices. Delivery is always prompt and reliable."
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>👍 3</span>
                  <span>💬 0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-10 py-4 text-center text-xs text-gray-500">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <div className="mt-2">
          © 2024 Stationery Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
