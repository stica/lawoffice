
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Blog: React.FC<{ messages: any }> = ({ messages }) => {

  const t = useTranslations("Blog");
  const pathname = usePathname();

  const currentCode = pathname.split("/")[1] || "en";
  const blogPath = `/${currentCode}/blog/zakon-o-zastiti-licnih-podataka`;

  return (
    <>
      <div className="blog-page">
        <h1>Blog</h1>
        <div className="blog-heding-wrapper">
          <h2 className="blog-heading">{t('title')}</h2>

          <div className="col-lg-12 col-sm-12 blog-button-wrapper">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => window.location.href = blogPath}
            >
              {t('more')}
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Blog;
