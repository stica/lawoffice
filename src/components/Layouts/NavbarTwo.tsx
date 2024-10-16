"use client";

import React, { useState, useEffect } from "react";
import { menus } from "../../../libs/menus";

import MenuItem from "./MenuItem";
import LangSwitcher from "../Common/LngSwitcher";
import { useTranslations } from "next-intl";

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

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            {/* <Link href="/" className="navbar-brand">
            <div className="logo-wrapper">
              <Image
                src={whiteLogo}
                className="white-logo"
                alt="logo"
                width={150}
                height={40}
              />
            </div>

            </Link> */}

            {/* Toggle navigation */}
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
