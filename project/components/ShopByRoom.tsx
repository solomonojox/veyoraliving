import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

interface Room {
  name: string;
  image: string;
}

const ROOMS: Room[] = [
  {
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dining Room",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Home Office",
    image:
      "https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=800&auto=format&fit=crop",
  },
  // {
  //   name: "Outdoor",
  //   image:
  //     "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
  // },
];

export default function ShopByRoom() {
  return (
    <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="flex items-end justify-between mb-8 sm:mb-10">
        <h2 className="font-serif text-3xl sm:text-[34px] text-[#1F2617] mx-auto sm:mx-0">
          Shop by Room
        </h2>
        <a
          href="#"
          className="hidden sm:flex items-center gap-2 text-sm text-[#1F2617] shrink-0"
        >
          View All Rooms <FiArrowRight />
        </a>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-5">
        {ROOMS.map((room) => (
          <div key={room.name} className="group cursor-pointer grow shrink-0 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.9rem)] lg:basis-[calc(20%-1rem)]">
            <div className="relative overflow-hidden rounded-lg aspect-4/5 sm:aspect-7/4">
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-3 text-[#1F2617] text-[15px] font-medium">
              {room.name}
            </h3>
            <a
              href="#"
              className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-[#5B6152] hover:text-[#B5502F] transition-colors"
            >
              Shop Now <FiArrowRight className="text-xs" />
            </a>
          </div>
        ))}
      </div>

      <div className="sm:hidden mt-8 flex justify-center">
        <a href="#" className="flex items-center gap-2 text-sm text-[#1F2617]">
          View All Rooms <FiArrowRight />
        </a>
      </div>
    </section>
  );
}
