import Image from "next/image";
import styles from "./page.module.css";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import MainBanner from "@/components/AppComponents/MainBanner";
import Services from "@/components/AppComponents/Services";
import OurWorks from "@/components/AppComponents/OurWorks";
import Feedback from "@/components/AppComponents/Feedback";
import About from "@/components/AppComponents/About";
import FunFacts from "@/components/AppComponents/FunFacts";
import PartnerTwo from "@/components/AppComponents/PartnerTwo";
import CtaAreaTwo from "@/components/AppComponents/CtaAreaTwo";
import LatestNews from "@/components/AppComponents/LatestNews";
import Footer from "@/components/Layouts/Footer";

export default function Home() {
  return (
    <main>
      <NavbarTwo />

      <MainBanner />

      <Services />

      <OurWorks />

      <Feedback />

      <About />

      <FunFacts />

      <PartnerTwo />

      <CtaAreaTwo />

      <div className="ptb-100">
        <LatestNews />
      </div>

      <Footer />
    </main>
  );
}
