"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isHydrated: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "veyora-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load any previously saved cart once the component mounts on the client.
  // Guarding with isHydrated avoids a server/client markup mismatch.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // Ignore malformed/blocked storage and start with an empty cart.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist on every change, but only after the initial load has happened
  // so we don't overwrite saved data with an empty array on first render.
  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  function addItem(product: Product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.images[0],
          qty,
        },
      ];
    });
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateQty(id: string, qty: number) {
    if (qty < 1) return removeItem(id);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  }

  function clearCart() {
    setItems([]);
  }

  const { totalItems, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalItems: acc.totalItems + item.qty,
        subtotal: acc.subtotal + item.qty * item.price,
      }),
      { totalItems: 0, subtotal: 0 }
    );
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        subtotal,
        isHydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
