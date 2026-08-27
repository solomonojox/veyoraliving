"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingBag, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItemRow from "@/components/CartItemRow";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

const FREE_SHIPPING_THRESHOLD = 999;
const FLAT_SHIPPING_RATE = 49;

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, totalItems, clearCart, isHydrated } =
    useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_RATE;
  const tax = subtotal * 0.075;
  const total = subtotal + shipping + tax;

  function handleCheckout() {
    // Prototype checkout: no payment processing, just simulates a placed order.
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-24 sm:py-32 text-center">
          <FiCheckCircle className="mx-auto text-5xl text-[#3f5c3a]" />
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2617] mt-6">
            Thank You for Your Order!
          </h1>
          <p className="mt-3 text-[#5B6152] max-w-md mx-auto">
            This is a prototype checkout, so no payment was taken &ndash; but in a
            live store, a confirmation would be on its way to your inbox right
            now.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 bg-[#2B3222] hover:bg-[#3a4530] transition-colors text-white text-sm px-7 py-3.5 rounded-sm"
          >
            Continue Shopping <FiArrowRight />
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2617] mb-2">
          Shopping Cart
        </h1>

        {!isHydrated ? (
          <p className="text-[#5B6152] text-sm mt-6">Loading your cart&hellip;</p>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <FiShoppingBag className="mx-auto text-4xl text-[#2B3222]/30" />
            <p className="mt-4 text-[#1F2617] font-medium">Your cart is empty</p>
            <p className="text-[#5B6152] text-sm mt-1">
              Looks like you {`haven't`} added anything yet.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 bg-[#2B3222] hover:bg-[#3a4530] transition-colors text-white text-sm px-7 py-3.5 rounded-sm"
            >
              Browse Furniture <FiArrowRight />
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-[#5B6152] mb-6">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Line items */}
              <div className="lg:col-span-2">
                {items.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onUpdateQty={updateQty}
                    onRemove={removeItem}
                  />
                ))}

                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#2B3222] underline underline-offset-4 decoration-[#2B3222]/40 hover:decoration-[#2B3222]"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#F3EEE6] rounded-lg p-6 sm:p-7 sticky top-24">
                  <h2 className="font-serif text-xl text-[#1F2617] mb-5">
                    Order Summary
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between text-[#5B6152]">
                      <span>Subtotal</span>
                      <span className="text-[#1F2617]">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#5B6152]">
                      <span>Shipping</span>
                      <span className="text-[#1F2617]">
                        {shipping === 0 ? "Free" : formatPrice(shipping)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#5B6152]">
                      <span>Estimated Tax</span>
                      <span className="text-[#1F2617]">{formatPrice(tax)}</span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <p className="mt-3 text-xs text-[#B5502F]">
                      Add {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more
                      for free delivery.
                    </p>
                  )}

                  <div className="mt-5 pt-5 border-t border-[#2B3222]/15 flex items-center justify-between">
                    <span className="text-[#1F2617] font-medium">Total</span>
                    <span className="text-[#1F2617] font-medium text-lg">
                      {formatPrice(total)}
                    </span>
                  </div>

                  {/* Promo code (visual only in this prototype) */}
                  <div className="mt-6 flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 min-w-0 bg-white border border-[#2B3222]/20 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#2B3222]"
                    />
                    <button
                      type="button"
                      className="text-sm px-4 py-2.5 rounded-sm border border-[#2B3222] text-[#2B3222] hover:bg-[#2B3222] hover:text-white transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2B3222] hover:bg-[#3a4530] transition-colors text-white text-sm px-6 py-3.5 rounded-sm"
                  >
                    Checkout <FiArrowRight />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-[#8A8E77]">
                    Prototype checkout &ndash; no payment will be processed.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
