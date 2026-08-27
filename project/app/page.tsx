import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByRoom from "@/components/ShopByRoom";
import ServiceHighlights from "@/components/ServiceHighlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <ShopByRoom />
      <ServiceHighlights />
      <Footer />
    </main>
  );
}
