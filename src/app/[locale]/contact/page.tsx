import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import ContactInfo from "../../../components/Contact/ContactInfo";
import ContactForm from "../../../components/Contact/ContactForm";
import Footer from "../../../components/Layouts/Footer";
import { headers } from 'next/headers';

async function fetchMessages(locale: string) {
  const messages = await import(`../../../dictionaries/${locale}.json`);
  return messages.default;
}

export default async function Page({ params }: { params: { locale: string } }) {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  const url = pathname ? pathname.toString() : ''; 
  const language = url.split('/')[3] || 'en';
  const messages = await fetchMessages(language);

  return (
    <main>
      <NavbarTwo/>
      <ContactInfo messages={messages} />
      <ContactForm messages={messages} />
      <Footer />
    </main>
  );
}
