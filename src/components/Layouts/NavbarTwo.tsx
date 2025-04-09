"use client";

import React, { useState, useEffect } from "react";
import { menus } from "../../../libs/menus";

import MenuItem from "./MenuItem";
import LangSwitcher from "../Common/LngSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavbarTwo: React.FC = () => {
  const t = useTranslations("Menu");

  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const pathname = usePathname();
  const currentCode = pathname.split("/")[1] || "en";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">

            <Link
              className="navbar-brand-link-custom"
              href={`/${currentCode}/`}
            >
              <Image
                src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.84 484.37"><polygon points="195.68 364.12 208.44 376.88 221.2 364.07 221.2 287.04 195.68 261.52 195.68 364.12"/><polygon points="144.43 312.81 170.05 338.44 170.05 192.78 144.43 167.15 144.43 312.81"/><polygon points="246.92 153.96 272.56 128.34 144.43 128.34 170.05 153.96 195.68 153.96 195.68 218.63 221.3 244.25 221.3 153.96 246.92 153.96"/><polygon points="246.92 338.44 272.55 312.84 272.55 167.15 246.92 192.79 246.92 338.44"/></svg>`}
                alt="SVG Image"
                className="svg2"
                width={387.84}
                height={484.37}
              />

            </Link>
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {/* <MegaMenu /> */}

                {menus(t).map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
                <LangSwitcher></LangSwitcher>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
