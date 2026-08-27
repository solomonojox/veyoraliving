import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const CONTACT_DETAILS = [
  {
    icon: FiMapPin,
    label: "Showroom",
    value: "482 Bellweather Ave, Austin, TX 78701",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "1-800-VEYORA",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "hello@veyoraliving.com",
  },
  {
    icon: FiClock,
    label: "Hours",
    value: "Mon&ndash;Sat, 9am&ndash;6pm CT",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* Banner */}
      <section className="bg-[#F3EEE6]">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-14 sm:py-16 text-center">
          <h1 className="font-serif text-4xl sm:text-[44px] text-[#1F2617]">
            Get in Touch
          </h1>
          <p className="mt-3 text-[#5B6152] text-[15px] max-w-xl mx-auto">
            Questions about an order, a room {`you're`} planning, or just want to
            say hi? {`We'd`} love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-[#1F2617] mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#F3EEE6] flex items-center justify-center shrink-0">
                      <Icon className="text-[#2B3222] text-base" />
                    </div>
                    <div>
                      <p className="text-[#1F2617] font-medium text-sm">
                        {detail.label}
                      </p>
                      <p
                        className="text-[#5B6152] text-sm mt-0.5"
                        dangerouslySetInnerHTML={{ __html: detail.value }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden aspect-4/3 bg-[#F3EEE6] flex items-center justify-center">
              <div className="text-center text-[#5B6152]">
                <FiMapPin className="mx-auto text-2xl mb-2" />
                <p className="text-xs">Map preview unavailable in this prototype</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-[#1F2617] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
