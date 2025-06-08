import Image from "next/image";
import { SectionHeading, Body } from "@/components/shared/Typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotebookDetailPage() {
  return (
    <div className="min-h-screen bg-white font-['Work_Sans','Noto_Sans',sans-serif] text-[#111418]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#60748a] mb-8 flex items-center space-x-2">
          <span>
            <a href="/products" className="hover:underline">
              Products
            </a>
          </span>
          <span>{"/"}</span>
          <span>Notebooks</span>
        </nav>

        {/* Product Title & Description */}
        <div className="mb-6">
          <SectionHeading>Premium Hardcover Notebook</SectionHeading>
          <Body>Durable and stylish notebooks for all your writing needs.</Body>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl overflow-hidden mb-8 h-auto sm:h-[340px]">
          {/* Large left image */}
          <div className="relative col-span-1 sm:col-span-2 h-[180px] sm:h-full rounded-xl overflow-hidden">
            <Image
              src="/images/product-details/book.png"
              alt="Notebook cover"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>
          {/* Stacked right images */}
          <div className="flex flex-col gap-3 h-[180px] sm:h-full">
            <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden">
              <Image
                src="/images/product-details/book-pencil.png"
                alt="Notebook open inner pages"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden">
              <Image
                src="/images/product-details/notepad-spiral.png"
                alt="Spiral notebook and pen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Product Details Table */}
        <section className="mb-8">
          <h2 className="font-semibold text-[#111418] mb-2 text-base">Product Details</h2>
          <Body className="mb-3">
            This premium hardcover notebook features a durable cover, high quality paper, and a lay-flat design for comfortable writing. Perfect for students, professionals, and anyone who values quality stationery.
          </Body>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-[#111418] border-separate border-spacing-y-1">
              <tbody>
                <tr><td className="font-medium w-1/3 py-1 text-[#60748a]">Cover Material</td><td className="py-1">Hardcover</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Paper Weight</td><td className="py-1">100gsm</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Number of Pages</td><td className="py-1">200</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Ruling Type</td><td className="py-1">Lined / Plain</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Size</td><td className="py-1">A5 (14.8 × 21cm)</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">SKU</td><td className="py-1">NB-031</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Retail Price</td><td className="py-1">UGX 25,000</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Wholesale Price</td><td className="py-1">UGX 23,000 (min. 10)</td></tr>
                <tr><td className="font-medium py-1 text-[#60748a]">Available Stock</td><td className="py-1">500+</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <Button className="bg-[#0c77f2] hover:bg-blue-700 text-white px-6 py-2 font-bold rounded-lg shadow-none w-full sm:w-auto">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="border-[#0c77f2] text-[#0c77f2] hover:bg-[#0c77f2]/10 rounded-lg w-full sm:w-auto"
          >
            Request Quote
          </Button>
        </div>

        {/* Contact Us Buttons */}
        <div className="flex gap-2 mb-8">
          <Button variant="secondary" className="bg-white border border-[#f0f2f5] text-[#111418] shadow-none rounded-lg">
            WhatsApp
          </Button>
          <Button variant="secondary" className="bg-white border border-[#f0f2f5] text-[#111418] shadow-none rounded-lg">
            Call
          </Button>
        </div>

        {/* Related Products */}
        <section>
          <h3 className="font-semibold text-[#111418] mb-3 text-base">Related Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: "Colorful Pen Set", image: "/images/school-supplies/colored-pencils.png", description: "Set of 10 vibrant pens" },
              { name: "Assorted Sticky Notes", image: "/images/school-supplies/math-sets.png", description: "Pack of 6 assorted sticky notes" },
              { name: "Compact Desk Organizer", image: "/images/school-supplies/compact-desk-organizer.png", description: "Keep your workspace tidy" },
            ].map((prod, idx) => (
              <Card key={idx} className="overflow-hidden flex flex-col group p-0 min-w-[160px] max-w-[160px]">
                <div className="relative aspect-square bg-[#f8f8f8] w-full rounded-t-lg overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <div className="font-medium text-xs text-[#111418] mb-1">{prod.name}</div>
                  <div className="text-xs text-[#60748a]">{prod.description}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
