import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: ["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor"],
  },
  {
    title: "Design Services",
    links: ["AI Interior Designer", "AR Visualization", "1:1 Design Consult", "Room Planner"],
  },
  {
    title: "Customer Care",
    links: ["Track Order", "Shipping & Delivery", "Returns & Exchanges", "FAQs", "Contact Us"],
  },
  {
    title: "Company",
    links: ["About Veyora", "Sustainability", "Careers", "Press"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#212819] text-[#D8DACB]">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl text-white">
              Stay in the loop
            </h3>
            <p className="text-sm text-[#B4B7A5] mt-1.5">
              New arrivals, design tips and exclusive offers &ndash; straight to your inbox.
            </p>
          </div>
          <form className="w-full lg:w-auto flex items-stretch gap-2 max-w-md">
            <div className="relative flex-1">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8E77]" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/15 rounded-sm pl-10 pr-3 py-3 text-sm text-white placeholder:text-[#8A8E77] focus:outline-none focus:border-white/40"
              />
            </div>
            <button
              type="submit"
              className="bg-[#B5502F] hover:bg-[#c85f3c] transition-colors text-white text-sm px-5 py-3 rounded-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1 pr-4">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-[0.12em] text-white">
                VEYORA
              </span>
              <span className="text-[10px] tracking-[0.45em] text-[#B4B7A5] mt-1">
                LIVING
              </span>
            </div>
            <p className="text-sm text-[#B4B7A5] mt-4 max-w-55">
              AI-powered recommendations, AR visualization and curated
              furniture &ndash; all in one place.
            </p>
            <div className="flex items-center gap-4 mt-5 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <FiFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-white transition-colors">
                <FiYoutube />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#B4B7A5] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8E77]">
          <span>&copy; {new Date().getFullYear()} Veyora Living. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
