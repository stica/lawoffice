"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/new/img1.jpg";

const AboutContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="about-lawyer">
        <div className="container">
          <div className="about-lawyer-items">
            <div className="about-lawyer-image">
              <Image
                src={aboutImg}
                alt="image"
                className="rounded-10"
                width={500}
                height={750}
              />
            </div>

            <div className="about-lawyer-content">
              <div className="section-title">
                <h2>About</h2>
              </div>

              <div className="container">
                <p>My education began at the Gymnasium "Sveti Sava" in Prijedor, after which I graduated from the Faculty of Law at the University of Banja Luka. I passed the bar exam and the attorney exam, and further qualified as a Certified Data Protection Officer through Mobes Quality.</p>
                <p>My first work experience was as a volunteer at the Agency for Economic Development "PREDA-PD" in Prijedor, where I worked on project implementation. I then worked as an associate in a notary office in Prijedor, where I handled various types of contracts, inheritance proceedings, and worked in commercial law, including the establishment of companies, status changes, and amendments to founding acts.</p>
                <p>After that, I spent several months as an intern at Obsidian Media in Banja Luka, where I worked on aligning websites with EU legal regulations and the company's internal rules. From December 2020 to November 2021, I worked as a legal consultant at the international company Molson Coors BH d.o.o. in Banja Luka, where I was responsible for preparing and drafting contracts, making decisions, preparing internal acts, and resolving legal issues related to GDPR regulations and marketing crisis situations.</p>
                <p>From May 2022 to January 2024, I worked as a senior associate in a notary office in Banja Luka, where I continued to handle contracts and other notary work. From February 2024 to June 2024, I was employed as a graduate lawyer at the company "MB Real Estate and Consulting" d.o.o. in Banja Luka. Concurrently, from February 2023 to May 2024, I was a legal advisor for startups and digital assets, working on issues in the field of IT law.</p>
                <p>With extensive experience in a notary office, where I founded companies, handled their status changes and amendments to founding acts, as well as work in an international corporation and as a legal advisor to startups and small companies, I have developed an excellent profile as a corporate lawyer. I am familiar with all the problems of companies, from their establishment, start of operations, to development.</p>
                <p>Additionally, I have been a lecturer and panelist at several conferences and professional workshops, such as:</p>
                <ul>
                    <li>"Digital Assets in Practice: A Guide for Legal and Physical Entities" at the Chamber of Commerce of the Republic of Srpska</li>
                    <li>"Integration of Virtual Currencies in Everyday Business" at Jahorina</li>
                    <li>"Local Self-Government in RS" at the Faculty of Law, University of Banja Luka</li>
                </ul>
                <p>I am also a co-author of the Handbook for the Implementation of Risk Prevention Measures for Money Laundering and Terrorist Financing through Virtual Currencies.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
