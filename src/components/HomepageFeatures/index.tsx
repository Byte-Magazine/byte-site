import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import {featureList} from "@site/src/data/FEATURE_LIST";


function Feature({title, imageSrc, description, link, download, themeColor}) {
    return (
        <a href={`/mags/${title}`} className={`col col--3 ${styles.cardWrapper}`}>
            <div className={styles.card}>

                <div className={styles.imageWrapper}>
                    <img className={styles.poster} src={imageSrc} alt={title}/>
                    <div className={styles.issueTitle} style={{backgroundColor: themeColor}}>
                        {title}
                    </div>
                </div>

                <Heading as="h3" className={styles.title}>{description}</Heading>

                <div className={styles.buttons}>
                    <Link to={download} className={`${styles.btn} ${styles.secondaryBtn}`} download>
                        دانلود نشریه
                    </Link>
                    <Link to={link} className={`${styles.btn} ${styles.primaryBtn}`}>
                        مشاهده متن‌ها
                    </Link>
                </div>
            </div>
        </a>
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
