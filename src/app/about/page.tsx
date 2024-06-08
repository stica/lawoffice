import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Partner from "../../components/Common/Partner";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";
import AboutContent from "@/components/About/AboutContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <AboutContent />

      <Partner />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
