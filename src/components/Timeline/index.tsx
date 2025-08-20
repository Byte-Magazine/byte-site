import React from "react";
import styles from "./styles.module.css";
import shared from "../HomepageFeatures/styles.module.css";
import {featureList} from "@site/src/data/FEATURE_LIST";

const Timeline: React.FC = () => {
        return (
            <div className={styles.timelineContainer}>
                <div className={styles.timelineLine}/>
                {featureList.reverse().map((feature, index) => (
                    <a href={`/mags/${feature.title}`} key={index} style={{textDecoration: "none"}}
                       className={styles.timelineItem}>
                        <div className={styles.timelineDot}
                             style={{
                                 "--card-hover-color": feature.themeColor,
                             } as React.CSSProperties}
                        >
                            <img src="/img/logo.svg" alt="Byte Logo"/>
                        </div>
                        <div
                            className={shared.card}

                            style={{
                                "--card-hover-color": feature.themeColor,
                                paddingBottom: "20px"
                            } as React.CSSProperties}
                        >
                            <div className={shared.title}>{feature.title}</div>
                            <div className={styles.date}>{feature.date}</div>
                            <div style={{display: "flex", justifyContent: "center",flexDirection: "row-reverse",gap:"4px", alignItems: "center"}}>
                                <p className={"font-dana"}>{feature.description}</p>
                                <p className={"font-snapp"}>بایت</p>
                            </div>
                            <a
                                href={`https://s3.byte-mag.ir/mags/${feature.title}.pdf`}
                                className={`${shared.btn} ${shared.primaryBtn}`}
                                style={{padding: "0.2rem 0.6rem", textDecoration: "none"}}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                دانلود فایل نشریه
                            </a>
                        </div>
                    </a>
                ))}
            </div>
        )
            ;
    }
;

export default Timeline;