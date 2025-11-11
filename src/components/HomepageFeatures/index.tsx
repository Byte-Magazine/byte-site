import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import { featureList } from "@site/src/data/FEATURE_LIST";

export function Feature({
  title,
  imageSrc,
  description,
  themeColor,
  slug = "",
  file = "",
}) {
  const file_url = `https://s3.byte-mag.ir/mags/${file}.pdf`;
  return (
    <div
      className={`col col--3 ${styles.cardWrapper}`}
      onClick={() => {
        if (slug) {
          window.location.href = `/mags/${slug}`;
        } else if (file) {
          window.location.href = file_url;
        }
      }}
      style={{ cursor: `${slug || file ? "pointer" : "auto"}` }}
    >
      <div
        className={styles.card}
        style={{ "--card-hover-color": themeColor } as React.CSSProperties}
      >
        <div className={styles.imageWrapper}>
          <img className={styles.poster} src={imageSrc} alt={title} />
          <div
            className={styles.issueTitle}
            style={{ backgroundColor: themeColor }}
          >
            {title}
          </div>
        </div>

        <h3 className={styles.title}>{description}</h3>

        <div className={styles.buttons} onClick={(e) => e.stopPropagation()}>
          {file && (
            <a
              href={file_url}
              className={`${styles.btn} ${styles.secondaryBtn}`}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              دانلود نشریه
            </a>
          )}
          {slug && (
            <Link
              to={`/mags/${slug}`}
              className={`${styles.btn} ${styles.primaryBtn}`}
            >
              مشاهده متن‌ها
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="padding-vert--lg">
      <div className="container">
        <div className={styles.centerRow}>
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
