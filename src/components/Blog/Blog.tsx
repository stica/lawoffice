"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Blog: React.FC<{ messages: any }> = ({ messages }) => {
  const t = useTranslations("Blog");
  const pathname = usePathname();
  const currentCode = pathname.split("/")[1] || "en";

  const blogItems = [
    {
      title: t('tokenizationTitle'),
      path: `/${currentCode}/blog/tokenizuj-svoj-biznis-pretvori-ideju-u-kapital`,
      description: t('tokenizationDescription')
    },
    {
      title: t('title'),
      path: `/${currentCode}/blog/zakon-o-zastiti-licnih-podataka`,
      description: t('description')
    }
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-grid">
        {blogItems.map((item, index) => (
          <div key={index} className="blog-item">
            <div className="blog-content">
              <h2 className="blog-heading">{item.title}</h2>
              <p className="blog-description">{item.description}</p>
              <div className="blog-button-wrapper">
                <a
                  href={item.path}
                  className="btn primary"
                >
                  {t('more')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
