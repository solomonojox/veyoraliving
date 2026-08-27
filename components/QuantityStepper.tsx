"use client";

import { FiMinus, FiPlus } from "react-icons/fi";

interface QuantityStepperProps {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: QuantityStepperProps) {
  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center border border-[#2B3222]/20 rounded-sm ${
        isSmall ? "h-9" : "h-11"
      }`}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="h-full px-3 text-[#2B3222] hover:bg-[#2B3222]/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
      >
        <FiMinus className={isSmall ? "text-xs" : "text-sm"} />
      </button>
      <span
        className={`select-none text-center text-[#1F2617] ${
          isSmall ? "w-8 text-sm" : "w-10 text-[15px]"
        }`}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="h-full px-3 text-[#2B3222] hover:bg-[#2B3222]/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
      >
        <FiPlus className={isSmall ? "text-xs" : "text-sm"} />
      </button>
    </div>
  );
}
