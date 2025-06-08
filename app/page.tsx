import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, Body } from "@/components/shared/Typography";
import { ProductCard } from "@/components/shared/ProductCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] flex flex-col">
      {/* Hero */}
      <section className="flex justify-center py-8 bg-white">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-none" style={{ maxWidth: 820, height: 320 }}>
          <Image
            src="/images/landing-page/hero-header.png"
            alt="Stationery Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white px-4">
            <PageHero>Your Trusted Stationery Partner in Uganda</PageHero>
            <Body className="text-white text-sm md:text-base mb-5 text-center font-normal">
              Quality and reliability for schools, offices, and artists.
            </Body>
            <Button className="bg-[#0c77f2] hover:bg-blue-700 px-6 py-2 text-sm md:text-base font-bold rounded-lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading>Featured Products</SectionHeading>
          <div className="flex gap-3 overflow-x-auto px-1">
            {[
              { title: "Back to School Essentials", img: "/images/landing-page/pencil-book.png", description: "" },
              { title: "Office Productivity Boosters", img: "/images/landing-page/clean-table.png", description: "" },
              { title: "Unleash Your Creativity", img: "/images/landing-page/pencil-tin.png", description: "" },
              { title: "Student Success Packs", img: "/images/landing-page/backpack.png", description: "" },
              { title: "Student Success Packs", img: "/images/landing-page/backpack.png", description: "" },
            ].map((product, index) => (
              <ProductCard key={index} img={product.img} title={product.title} description={product.description} href="#" />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading>Customer Testimonials</SectionHeading>
          <div className="flex flex-col gap-8">
            <TestimonialCard
              avatar="/images/landing-page/female-user.png"
              name="Sarah K."
              date="2 months ago"
              rating={5}
              text={`"SJ Pro Supplies has been our go-to supplier for years. Their products are top-notch, and their customer service is exceptional!"`}
              likes={5}
              comments={1}
            />
            <TestimonialCard
              avatar="/images/landing-page/male-user.png"
              name="David M."
              date="3 months ago"
              rating={4}
              text={`"Great selection of stationery at competitive prices. Delivery is always prompt and reliable."`}
              likes={3}
              comments={0}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
