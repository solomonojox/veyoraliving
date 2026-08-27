import { IconType } from "react-icons";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiCubeTransparentLight } from "react-icons/pi";
// import { HiOutlineHeadset } from "react-icons/hi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

interface Highlight {
  icon: IconType;
  title: string;
  description: string;
  cta: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: HiOutlineSparkles,
    title: "AI Interior Designer",
    description: "Get personalized room designs in seconds.",
    cta: "Try AI Designer",
  },
  {
    icon: PiCubeTransparentLight,
    title: "Augmented Reality",
    description: "Place furniture in your space before you buy.",
    cta: "Try AR Now",
  },
  {
    icon: MdOutlineHeadsetMic,
    title: "Expert Support",
    description: "Talk to our design experts whenever you need.",
    cta: "Chat Now",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="bg-[#F3EEE6]">
      <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <Icon className="text-3xl text-[#1F2617] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#1F2617] font-medium text-[16px]">
                    {item.title}
                  </h3>
                  <p className="text-[#5B6152] text-[13.5px] leading-snug mt-1.5 max-w-60">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#1F2617] underline underline-offset-4"
                  >
                    {item.cta} <FiArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
