import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import srFlag from "../../../public/images/flags/sr.png";
import gbFlag from "../../../public/images/flags/gb.png";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }

  const router = useRouter();
  const pathname = usePathname();

  const options: Option[] = [
    { country: "English", code: "en", flag: gbFlag },
    { country: "Srpski", code: "sr", flag: srFlag },
  ];

  // Determine the current language code from the pathname
  const currentCode = pathname.split("/")[1] || "en"; // Default to 'en' if pathname is '/'

  // Filter out the selected language to show only the other option
  const visibleOption = options.find(option => option.code !== currentCode);

  const handleFlagClick = (option: Option) => {
    router.push(`/${option.code}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 lng-switcher">
      {visibleOption && (
        <button
          className=""
          onClick={() => handleFlagClick(visibleOption)}
        >
          <Image
            className="lng-switcher-flag"
            src={visibleOption.flag}
            alt={`${visibleOption.country} flag`}
          />
        </button>
      )}
    </div>
  );
};

export default LangSwitcher;
