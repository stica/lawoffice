import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import ContactInfo from "../../../components/Contact/ContactInfo";
import ContactForm from "../../../components/Contact/ContactForm";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
