"use client";

import Link from "next/link";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import type { CartItem } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import QuantityStepper from "./QuantityStepper";

interface CartItemRowProps {
  item: CartItem;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItemRow({
  item,
  onUpdateQty,
  onRemove,
}: CartItemRowProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 py-6 border-b border-[#2B3222]/10">
      <Link
        href={`/shop/${item.slug}`}
        className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-lg overflow-hidden bg-[#F3EEE6] shrink-0"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <Link
          href={`/shop/${item.slug}`}
          className="text-[#1F2617] font-medium text-[15px] hover:text-[#B5502F] transition-colors line-clamp-2"
        >
          {item.name}
        </Link>
        <p className="text-[#5B6152] text-sm mt-1">{formatPrice(item.price)} each</p>

        <div className="mt-3 flex items-center gap-4">
          <QuantityStepper
            value={item.qty}
            onChange={(next) => onUpdateQty(item.id, next)}
            size="sm"
          />
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-1.5 text-xs text-[#5B6152] hover:text-[#B5502F] transition-colors"
          >
            <FiTrash2 /> Remove
          </button>
        </div>
      </div>

      <div className="text-[#1F2617] font-medium text-[15px] shrink-0">
        {formatPrice(item.price * item.qty)}
      </div>
    </div>
  );
}
