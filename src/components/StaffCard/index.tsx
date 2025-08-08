import BlogAuthor from "@theme/Blog/Components/Author";

import toFaNum from "@site/src/utils/toFaNum";
import styles from "./styles.module.css";
import "@site/src/css/card.css";

export default function StaffCard({staff}) {
    const author = {...staff, title: toFaNum(staff.title)};
    return (
        <div className="col col--4 margin-bottom--lg">
            <div className="card padding--lg cardContainer">
                <div className={styles.blogAuthor}>
                    <BlogAuthor author={author}/>
                </div>
                {
                    author.email ? (
                            <a href={"mailto:" + author.email} style={{minHeight: "20px"}} className={styles.email}>
                                {author.email}
                            </a>
                        ) :
                        (
                            <div style={{minHeight: "20px"}} className={styles.email}>
                                {author.email}
                            </div>
                        )
                }
            </div>
        </div>
    );
}
