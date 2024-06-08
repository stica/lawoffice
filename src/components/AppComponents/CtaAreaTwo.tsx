"use client";

import React from "react";
import Link from "next/link";

const CtaAreaTwo: React.FC = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              So What is Next?
            </span>
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Are You Ready? Let&apos;s get to work!
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Link href="/contact/" className="custom-btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
