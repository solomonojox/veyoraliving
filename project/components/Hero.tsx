import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import FeatureStrip from "./FeatureStrip";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-140 sm:h-150 md:h-140 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          alt="Modern living room with beige sectional sofa"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/50 to-transparent" />

        <div className="relative h-full mx-auto max-w-384 px-4 sm:px-6 lg:px-10 flex items-center .hero-text-scrim">
          <div className="max-w-xl ">
            <h1 className="font-serif font-semibold text-[42px] leading-[1.1] sm:text-5xl md:text-[66px] md:leading-[1.08] text-[#1F2617]">
              Beautiful Spaces.
              <br />
              Designed for You.
            </h1>
            <p className="mt-5 text-[#2B3222]/90 text-[15px] sm:text-base max-w-md">
              AI-powered recommendations, AR visualization and curated
              furniture &ndash; all in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <button className="bg-[#2B3222] hover:bg-[#3a4530] transition-colors text-white text-sm px-7 py-3.5 rounded-sm">
                Start Designing Your Space
              </button>
              <button className="flex items-center gap-2 text-[#2B3222] text-sm underline underline-offset-4 decoration-[#2B3222]/40 hover:decoration-[#2B3222] transition">
                Shop Best Sellers <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip overlapping hero bottom */}
      <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10">
        <div className="relative -mt-14 sm:-mt-16 z-10">
          <FeatureStrip />
        </div>
      </div>
    </section>
  );
}
