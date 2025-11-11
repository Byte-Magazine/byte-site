import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import "@site/src/css/toggle.css";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";
import {codenamehList} from "@site/src/data/FEATURE_LIST";
import React from "react";
import {Feature} from "@site/src/components/HomepageFeatures";

const title = "آرشیو کدنامه";
const desc = "کدنامه؛ پدر معنوی بایت";

export default function CodenamehPage() {
    return (
        <Layout title={title} description={desc}>
            {/*<HomepageHeader/>*/}
            <main>
                <section className="padding-vert--lg">
                    <div className="container">
                        <div className={styles.centerRow}>
                            {codenamehList.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
