import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

const featureList = [
  {
    title: "00000001",
    imageSrc: "/img/00000001.jpg",
    description: "",
    link: "/mags/00000001",
  },
  {
    title: "00000010",
    imageSrc: "/img/00000010.jpg",
    description: "",
    link: "/mags/00000010",
  },
];

function Feature({ title, imageSrc, description, link }) {
  return (
    <div className="col col--3 text--center">
      <div className="padding-horiz--md">
        <Link to={link} className={styles.featureLink}>
          <img className={styles.featureSvg} src={imageSrc} alt={""} />
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </Link>
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
