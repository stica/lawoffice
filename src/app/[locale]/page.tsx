import NavbarTwo from "@/components/Layouts/NavbarTwo";
import MainBanner from "@/components/AppComponents/MainBanner";
import Services from "@/components/AppComponents/Services";
import PartnerTwo from "@/components/AppComponents/PartnerTwo";
import Footer from "@/components/Layouts/Footer";
import { headers } from 'next/headers';

export default async function Home() {
        const headerList = headers();
        const pathname = headerList.get("x-current-path");
      
        const url = pathname ? pathname.toString() : ''; 
        const language = url.split('/')[3] || 'en';
        const messages = await fetchMessages(language);
      
  return (
    <main>
      <NavbarTwo />
      <MainBanner messages={messages}/>
      <Services messages={messages}/>
      <PartnerTwo messages={messages}/>
      <Footer />
    </main>
  );
}
async function fetchMessages(locale: string) {
  const messages = await import(`../../dictionaries/${locale}.json`);
  return messages.default;
}