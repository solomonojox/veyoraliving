"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import QuantityStepper from "./QuantityStepper";

export default function ProductDetailActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    if (!product.inStock) return;
    addItem(product, qty);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2200);
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#2B3222]">Quantity</span>
        <QuantityStepper value={qty} onChange={setQty} max={10} />
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`flex-1 flex items-center justify-center gap-2 text-sm px-6 py-3.5 rounded-sm transition-colors ${
            !product.inStock
              ? "bg-[#2B3222]/10 text-[#5B6152] cursor-not-allowed"
              : justAdded
              ? "bg-[#3f5c3a] text-white"
              : "bg-[#2B3222] hover:bg-[#3a4530] text-white"
          }`}
        >
          {justAdded ? (
            <>
              <FiCheck /> Added to Cart
            </>
          ) : (
            <>
              <FiShoppingCart />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </>
          )}
        </button>

        {justAdded && (
          <Link
            href="/cart"
            className="flex-1 flex items-center justify-center gap-2 text-sm px-6 py-3.5 rounded-sm border border-[#2B3222] text-[#2B3222] hover:bg-[#2B3222] hover:text-white transition-colors"
          >
            View Cart
          </Link>
        )}
      </div>
    </div>
  );
}
