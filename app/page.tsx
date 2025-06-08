import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] flex flex-col">
      {/* Hero */}
      <section className="flex justify-center py-8 bg-white">
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-none"
          style={{ maxWidth: 820, height: 320 }}
        >
          <Image
            src="/images/landing-page/hero-header.png"
            alt="Stationery Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white px-4">
            <h1 className="text-2xl md:text-4xl font-black mb-2 text-center tracking-tight leading-tight">
              Your Trusted Stationery Partner in Uganda
            </h1>
            <h2 className="text-sm md:text-base mb-5 text-center font-normal">
              Quality and reliability for schools, offices, and artists.
            </h2>
            <Button className="bg-[#0c77f2] hover:bg-blue-700 px-6 py-2 text-sm md:text-base font-bold rounded-lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[22px] font-bold text-[#111418] tracking-tight px-0 pb-3 pt-5">
            Featured Products
          </h2>
          <div className="flex gap-3 overflow-x-auto px-1">
            {[
              {
                title: "Back to School Essentials",
                img: "/images/landing-page/pencil-book.png",
              },
              {
                title: "Office Productivity Boosters",
                img: "/images/landing-page/clean-table.png",
              },
              {
                title: "Unleash Your Creativity",
                img: "/images/landing-page/pencil-tin.png",
              },
              {
                title: "Student Success Packs",
                img: "/images/landing-page/backpack.png",
              },
              {
                title: "Student Success Packs",
                img: "/images/landing-page/backpack.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 min-w-[160px] max-w-[160px] rounded-lg"
              >
                <div
                  className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg"
                  style={{ backgroundImage: `url('${product.img}')` }}
                ></div>
                <p className="text-[#111418] text-base font-medium">
                  {product.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[22px] font-bold text-[#111418] tracking-tight px-0 pb-3 pt-5">
            Customer Testimonials
          </h2>
          <div className="flex flex-col gap-8">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      "url('/images/landing-page/female-user.png')",
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Sarah K.
                  </p>
                  <p className="text-[#60748a] text-sm font-normal leading-normal">
                    2 months ago
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#111418] text-[#111418]"
                  />
                ))}
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal">
                "Stationery Hub has been our go-to supplier for years. Their
                products are top-notch, and their customer service is
                exceptional!"
              </p>
              <div className="flex gap-9 text-[#60748a]">
                <span>👍 5</span>
                <span>💬 1</span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      "url('/images/landing-page/male-user.png')",
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    David M.
                  </p>
                  <p className="text-[#60748a] text-sm font-normal leading-normal">
                    3 months ago
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#111418] text-[#111418]"
                  />
                ))}
                <Star className="w-5 h-5 text-[#bac4cf]" />
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal">
                "Great selection of stationery at competitive prices. Delivery
                is always prompt and reliable."
              </p>
              <div className="flex gap-9 text-[#60748a]">
                <span>👍 3</span>
                <span>💬 0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
