"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div className="group grow shrink-0 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.9rem)] lg:basis-[calc(25%-0.9rem)] flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block overflow-hidden rounded-lg aspect-4/5 sm:aspect-7/4 bg-[#F3EEE6]"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.compareAtPrice && (
          <span className="absolute top-3 left-3 bg-[#B5502F] text-white text-[11px] font-medium px-2.5 py-1 rounded-sm">
            Sale
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 right-3 bg-[#2B3222] text-white text-[11px] font-medium px-2.5 py-1 rounded-sm">
            Out of Stock
          </span>
        )}
      </Link>

      <Link href={`/shop/${product.slug}`} className="mt-3">
        <h3 className="text-[#1F2617] text-[15px] font-medium leading-snug hover:text-[#B5502F] transition-colors">
          {product.name}
        </h3>
      </Link>

      <div className="mt-1">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="text-xs" />
      </div>

      <div className="mt-1.5 flex items-center gap-2">
        <span className="text-[#1F2617] font-medium text-[15px]">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-[#5B6152] text-[13px] line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`mt-3 w-full flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-sm transition-colors ${
          !product.inStock
            ? "bg-[#2B3222]/10 text-[#5B6152] cursor-not-allowed"
            : justAdded
            ? "bg-[#3f5c3a] text-white"
            : "bg-[#2B3222] hover:bg-[#3a4530] text-white"
        }`}
      >
        {justAdded ? (
          <>
            <FiCheck /> Added
          </>
        ) : (
          <>
            <FiShoppingCart /> {product.inStock ? "Add to Cart" : "Unavailable"}
          </>
        )}
      </button>
    </div>
  );
}
