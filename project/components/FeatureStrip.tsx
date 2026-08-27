import { IconType } from "react-icons";
import { PiArmchairLight } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LuTruck } from "react-icons/lu";
import { PiShieldCheckLight } from "react-icons/pi";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: PiArmchairLight,
    title: "Curated for You",
    description: "AI recommends pieces that match your style and budget.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "See It in Your Space",
    description: "Use AR to visualize furniture in your own home.",
  },
  {
    icon: LuTruck,
    title: "Fast & Reliable Delivery",
    description: "White-glove delivery and assembly available.",
  },
  {
    icon: PiShieldCheckLight,
    title: "Buy with Confidence",
    description: "30-day returns, secure payments and quality guaranteed.",
  },
];

export default function FeatureStrip() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-400 px-6 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      {FEATURES.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="flex items-start gap-4">
            <Icon className="text-3xl text-[#2B3222] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#1F2617] font-medium text-[15px]">
                {feature.title}
              </h3>
              <p className="text-[#5B6152] text-[13.5px] leading-snug mt-1.5 max-w-55">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
