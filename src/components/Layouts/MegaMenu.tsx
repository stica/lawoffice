"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const MegaMenu: React.FC = () => {
  const currentRoute = usePathname();
  const t = useTranslations("Menu");

  return (
    <>
      <li className="nav-item">
        <Link href="/" className="nav-link">
          {t("home")}
        </Link>
      </li>
    </>
  );
};

export default MegaMenu;
