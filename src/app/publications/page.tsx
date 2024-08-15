import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";
import AboutContent from "@/components/About/AboutContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <AboutContent />

{/* bojana */}
      <CtaAreaTwo /> 

      <Footer />
    </>
  );
}
