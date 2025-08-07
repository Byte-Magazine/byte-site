import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export default function HomepageHeader() {
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <img src={"/img/logo-full.svg"} alt={"Byte Logo"} className={styles.logoFull}/>
                <Heading style={{color: "#f5f7fa"}} as="h1" className="hero__title">
                    <span className={"font-dana"} style={{fontSize: "2.5rem"}}>نشریۀ علمی فرهنگی</span>
                    <span className={"font-snapp"}> بایت</span>
                    <br/>
                    <span className={"font-dana"} style={{fontSize: "1.3rem"}}>دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف</span>
                </Heading>
            </div>
        </header>
    );
}
