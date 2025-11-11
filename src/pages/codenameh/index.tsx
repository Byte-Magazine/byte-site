import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import "@site/src/css/toggle.css";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";
import {codenamehList, featureList} from "@site/src/data/FEATURE_LIST";
import React from "react";
import {Feature} from "@site/src/components/HomepageFeatures";

const title = "آرشیو کدنامه";
const desc = "کدنامه؛ پدر معنوی بایت";

export default function CodenamehPage() {
    return (
        <Layout title={title} description={desc}>
            <HomepageHeader/>
            <main>
                {
                    codenamehList.map((dore, index) =>
                        <section className="padding-vert--lg" key={`dore-${index}`}>
                            <div className="container"
                            >
                                <Heading as="h2" className="margin-bottom--lg">
                                    {
                                        dore.name
                                    }
                                </Heading>
                                <div className={styles.centerRow} style={{width: "100%"}}>
                                    {dore.features.reverse().map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                }
            </main>
        </Layout>
    );
}
