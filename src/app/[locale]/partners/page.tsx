import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import PartnersAbout from "@/components/AppComponents/PartnersAbout";
import { headers } from 'next/headers';

export default async function Page() {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
  
    const url = pathname ? pathname.toString() : ''; 
    const language = url.split('/')[3] || 'en';
    const messages = await fetchMessages(language);
  

  return (
    <>
      <NavbarTwo />

      <PartnersAbout messages={messages} />

      <Footer />
    </>
  );
}

async function fetchMessages(locale: string) {
  const messages = await import(`../../../dictionaries/${locale}.json`);
  return messages.default;
}