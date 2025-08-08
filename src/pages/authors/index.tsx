import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import authorsData from "@site/mags/authors.json";

import "@site/src/css/toggle.css";
import StaffCard from "@site/src/components/StaffCard";
import {shuffleArray} from "@site/src/utils/shuffle";

const title = "نویسندگان نشریه";
const desc = "معرفی و راه‌های ارتباطی";

export default function AuthorsPage() {
    return (
        <Layout title={title} description={desc}>
            <HomepageHeader/>
            <main>
                <section className="padding-vert--lg container">
                    <Heading as="h2" className="margin-bottom--lg">
                        همه نویسندگان
                    </Heading>
                    <div className="row">
                        {shuffleArray(Object.values(authorsData)).sort((a, b) => {
                            if (a.image_url.includes("noone")) {
                                return 1;
                            } else {
                                return -1;
                            }
                        }).map((author, index) => {
                            const {email, ...socialsWithoutEmail} = author.socials || {};
                            const staff = {
                                name: author.name,
                                title: author.title,
                                email: author.socials?.email,
                                imageURL: author.image_url,
                                socials: socialsWithoutEmail || {},
                            };
                            return <StaffCard key={index} staff={staff}/>;
                        })}
                    </div>
                </section>
            </main>
        </Layout>
    );
}
