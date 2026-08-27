"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative w-full aspect-4/5 sm:aspect-3/4 rounded-lg overflow-hidden bg-[#F3EEE6]">
        <Image
          src={images[activeIndex]}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1} of ${name}`}
              className={`relative h-20 w-20 rounded-md overflow-hidden border-2 transition-colors ${
                activeIndex === index
                  ? "border-[#2B3222]"
                  : "border-transparent hover:border-[#2B3222]/30"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
