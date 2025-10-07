"use client";

import React, { useState, useEffect } from "react";
import { menus } from "../../../libs/menus";
import LangSwitcher from "../Common/LngSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavbarTwo: React.FC = () => {
  const t = useTranslations("Menu");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const currentCode = pathname.split("/")[1] || "en";

  const isActive = (link: string) => pathname === link;

  return (
    <header
      className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "#fff" : "transparent",
        boxShadow: isScrolled ? "0 2px 20px rgba(81, 61, 72, 0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isScrolled ? "70px" : "85px",
          transition: "height 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href={`/${currentCode}/`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Image
            src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.84 484.37"><polygon fill="%23513D48" points="195.68 364.12 208.44 376.88 221.2 364.07 221.2 287.04 195.68 261.52 195.68 364.12"/><polygon fill="%23513D48" points="144.43 312.81 170.05 338.44 170.05 192.78 144.43 167.15 144.43 312.81"/><polygon fill="%23513D48" points="246.92 153.96 272.56 128.34 144.43 128.34 170.05 153.96 195.68 153.96 195.68 218.63 221.3 244.25 221.3 153.96 246.92 153.96"/><polygon fill="%23513D48" points="246.92 338.44 272.55 312.84 272.55 167.15 246.92 192.79 246.92 338.44"/></svg>`}
            alt="Logo"
            width={35}
            height={43}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "45px",
          }}
          className="desktop-menu"
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "35px",
              alignItems: "center",
            }}
          >
            {menus(t).map((menuItem, index) => {
              const isContactBtn =
                menuItem.label.toLowerCase() === "contact" ||
                menuItem.label.toLowerCase() === "kontakt";
              const active = isActive(menuItem.link);

              if (isContactBtn) {
                return (
                  <li key={index}>
                    <Link
                      href={menuItem.link}
                      style={{
                        padding: "12px 28px",
                        backgroundColor: active ? "#513D48" : "#f7f0e8",
                        color: active ? "#fff" : "#513D48",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        display: "inline-block",
                        boxShadow: "0 4px 15px rgba(247, 240, 232, 0.4)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#513D48";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px rgba(81, 61, 72, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        if (!active) {
                          e.currentTarget.style.backgroundColor = "#f7f0e8";
                          e.currentTarget.style.color = "#513D48";
                        }
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(247, 240, 232, 0.4)";
                      }}
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link
                    href={menuItem.link}
                    style={{
                      color: active ? "#513D48" : "#646464",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: active ? 600 : 500,
                      position: "relative",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = "#513D48";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = "#646464";
                      }
                    }}
                  >
                    {menuItem.label}
                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: 0,
                          right: 0,
                          height: "2px",
                          backgroundColor: "#f7f0e8",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <LangSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            zIndex: 1001,
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "28px",
              height: "20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#513D48",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#513D48",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#513D48",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "100px 30px 30px",
          overflowY: "auto",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {menus(t).map((menuItem, index) => {
            const isContactBtn =
              menuItem.label.toLowerCase() === "contact" ||
              menuItem.label.toLowerCase() === "kontakt";
            const active = isActive(menuItem.link);

            if (isContactBtn) {
              return (
                <li key={index}>
                  <Link
                    href={menuItem.link}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "16px 24px",
                      backgroundColor: active ? "#513D48" : "#f7f0e8",
                      color: active ? "#fff" : "#513D48",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: 600,
                      display: "block",
                      textAlign: "center",
                      marginTop: "12px",
                    }}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link
                  href={menuItem.link}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "16px 20px",
                    color: active ? "#513D48" : "#646464",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: active ? 600 : 500,
                    display: "block",
                    borderRadius: "8px",
                    backgroundColor: active ? "#f9f6f6" : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          style={{
            marginTop: "30px",
            paddingTop: "30px",
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LangSwitcher />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 992px) {
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default NavbarTwo;
