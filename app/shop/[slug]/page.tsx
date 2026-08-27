import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronRight, FiTruck, FiShield, FiRotateCcw } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import ProductDetailActions from "@/components/ProductDetailActions";
import StarRating from "@/components/StarRating";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-[#5B6152] mb-8">
          <Link href="/" className="hover:text-[#B5502F] transition-colors">
            Home
          </Link>
          <FiChevronRight className="text-[10px]" />
          <Link href="/shop" className="hover:text-[#B5502F] transition-colors">
            Shop
          </Link>
          <FiChevronRight className="text-[10px]" />
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#B5502F] transition-colors"
          >
            {product.category}
          </Link>
          <FiChevronRight className="text-[10px]" />
          <span className="text-[#1F2617]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#B5502F] font-medium">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2617] mt-2">
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl text-[#1F2617] font-medium">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-[#5B6152] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="mt-5 text-[#5B6152] text-[15px] leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="mt-7 pt-7 border-t border-[#2B3222]/10">
              <ProductDetailActions product={product} />
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7 border-t border-[#2B3222]/10">
              <div className="flex items-center gap-2.5 text-[#2B3222]">
                <FiTruck className="text-lg shrink-0" />
                <span className="text-xs">Free delivery over $999</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#2B3222]">
                <FiRotateCcw className="text-lg shrink-0" />
                <span className="text-xs">30-day easy returns</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#2B3222]">
                <FiShield className="text-lg shrink-0" />
                <span className="text-xs">Secure checkout</span>
              </div>
            </div>

            {/* Details */}
            <div className="mt-8 pt-7 border-t border-[#2B3222]/10">
              <h2 className="text-[#1F2617] font-medium text-[15px] mb-3">
                Details
              </h2>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-[#5B6152] flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B5502F] shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-[#5B6152]">Dimensions:</dt>
                  <dd className="text-[#1F2617]">{product.dimensions}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[#5B6152]">Material:</dt>
                  <dd className="text-[#1F2617]">{product.material}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 border-t border-[#2B3222]/10">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2617] mb-8">
            You May Also Like
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
