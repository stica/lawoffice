import NavbarTwo from "@/components/Layouts/NavbarTwo";
import MainBanner from "@/components/AppComponents/MainBanner";
import Services from "@/components/AppComponents/Services";
import PartnerTwo from "@/components/AppComponents/PartnerTwo";
import Footer from "@/components/Layouts/Footer";

export default function Home() {
  return (
    <main>
      <NavbarTwo />
      <MainBanner />
      <Services />
      <PartnerTwo />
      <Footer />
    </main>
  );
}
