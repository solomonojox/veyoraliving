import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, ROOM_CATEGORIES, RoomCategory } from "@/data/products";

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const activeCategory = ROOM_CATEGORIES.includes(category as RoomCategory)
    ? (category as RoomCategory)
    : undefined;

  const products = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;

  return (
    <main className="bg-white">
      <Header />

      {/* Page banner */}
      <section className="bg-[#F3EEE6]">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-14 sm:py-16 text-center">
          <h1 className="font-serif text-4xl sm:text-[44px] text-[#1F2617]">
            Shop All Furniture
          </h1>
          <p className="mt-3 text-[#5B6152] text-[15px] max-w-xl mx-auto">
            Curated pieces for every room &ndash; built to last, styled to fit
            whatever look {`you're`} going for.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <Link
            href="/shop"
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              !activeCategory
                ? "bg-[#2B3222] text-white border-[#2B3222]"
                : "border-[#2B3222]/20 text-[#2B3222] hover:border-[#2B3222]"
            }`}
          >
            All
          </Link>
          {ROOM_CATEGORIES.map((room) => (
            <Link
              key={room}
              href={`/shop?category=${encodeURIComponent(room)}`}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                activeCategory === room
                  ? "bg-[#2B3222] text-white border-[#2B3222]"
                  : "border-[#2B3222]/20 text-[#2B3222] hover:border-[#2B3222]"
              }`}
            >
              {room}
            </Link>
          ))}
        </div>

        <p className="text-sm text-[#5B6152] mb-6">
          {products.length} {products.length === 1 ? "product" : "products"}
          {activeCategory ? ` in ${activeCategory}` : ""}
        </p>

        {products.length > 0 ? (
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#5B6152]">
            No products found in this category yet.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
