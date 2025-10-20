import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import { featureList } from "@site/src/data/FEATURE_LIST";

function Feature({ title, imageSrc, description, themeColor }) {
  return (
    <div
      className={`col col--3 ${styles.cardWrapper}`}
      onClick={() => (window.location.href = `/mags/${title}`)}
      style={{ cursor: "pointer" }}
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
          <a
            href={`https://s3.byte-mag.ir/mags/${title}.pdf`}
            className={`${styles.btn} ${styles.secondaryBtn}`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            دانلود نشریه
          </a>

          <Link
            to={`/mags/${title}`}
            className={`${styles.btn} ${styles.primaryBtn}`}
          >
            مشاهده متن‌ها
          </Link>
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
