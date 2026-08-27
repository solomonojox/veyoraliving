import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiFeather,
  FiHeart,
  FiGlobe,
  FiTool,
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VALUES = [
  {
    icon: FiFeather,
    title: "Thoughtful Design",
    description:
      "Every piece starts with how a room is actually lived in, not just how it photographs.",
  },
  {
    icon: FiTool,
    title: "Built to Last",
    description:
      "Solid frames, real materials, and construction that holds up to daily life.",
  },
  {
    icon: FiGlobe,
    title: "Responsibly Sourced",
    description:
      "We work with mills and workshops that meet our standards for materials and labor.",
  },
  {
    icon: FiHeart,
    title: "People First",
    description:
      "From our makers to our delivery teams, we build relationships that last longer than a sale.",
  },
];

const STATS = [
  { value: "12+", label: "Years in Business" },
  { value: "85K+", label: "Homes Furnished" },
  { value: "40+", label: "Partner Workshops" },
  { value: "4.8/5", label: "Average Rating" },
];

const TEAM = [
  {
    name: "Amara Diallo",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Daniel Osei",
    role: "Head of Product Design",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-96 sm:h-112 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Veyora Living workshop and showroom"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2617]/45" />
        <div className="relative h-full mx-auto max-w-384 px-4 sm:px-6 lg:px-10 flex items-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-white">
              Furniture, Made with Intention
            </h1>
            <p className="mt-4 text-white/85 text-[15px] sm:text-base max-w-md">
              We started Veyora Living to make thoughtfully designed furniture
              feel accessible &ndash; without cutting corners on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#B5502F] font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-[34px] text-[#1F2617] mt-3">
              From a Small Workshop to Your Living Room
            </h2>
            <p className="mt-5 text-[#5B6152] text-[15px] leading-relaxed">
              Veyora Living began in a single workshop with a simple idea:
              furniture should feel personal, not mass-produced. Over a
              decade later, that idea still drives every piece we design
              &ndash; now paired with AI-powered recommendations and AR tools
              that help you see a piece in your space before it ever arrives
              at your door.
            </p>
            <p className="mt-4 text-[#5B6152] text-[15px] leading-relaxed">
              We partner with independent workshops and mills who share our
              standards for craftsmanship and materials, so every sofa, table
              and chair we ship is something {`we'd`} genuinely put in our own
              homes.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 text-[#2B3222] text-sm underline underline-offset-4 decoration-[#2B3222]/40 hover:decoration-[#2B3222] transition"
            >
              Explore the Collection <FiArrowRight />
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-4/5 sm:aspect-3/4">
            <Image
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop"
              alt="Furniture maker working in a workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#2B3222]">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl sm:text-4xl text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <h2 className="font-serif text-3xl sm:text-[34px] text-[#1F2617] text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center sm:text-left">
                <Icon className="text-3xl text-[#2B3222] mx-auto sm:mx-0" />
                <h3 className="text-[#1F2617] font-medium text-[15px] mt-4">
                  {value.title}
                </h3>
                <p className="text-[#5B6152] text-[13.5px] leading-snug mt-2">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F3EEE6]">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <h2 className="font-serif text-3xl sm:text-[34px] text-[#1F2617] text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative rounded-full overflow-hidden h-32 w-32 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#1F2617] font-medium text-[15px] mt-4">
                  {member.name}
                </h3>
                <p className="text-[#5B6152] text-[13.5px] mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-[34px] text-[#1F2617]">
          Ready to Design Your Space?
        </h2>
        <p className="mt-3 text-[#5B6152] text-[15px] max-w-md mx-auto">
          Browse the full collection or reach out &ndash; our design team is
          happy to help you plan a room from scratch.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="bg-[#2B3222] hover:bg-[#3a4530] transition-colors text-white text-sm px-7 py-3.5 rounded-sm"
          >
            Shop Now
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-[#2B3222] text-sm underline underline-offset-4 decoration-[#2B3222]/40 hover:decoration-[#2B3222] transition"
          >
            Contact Our Team <FiArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
