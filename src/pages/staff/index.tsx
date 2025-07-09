import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";

import assistantsData from "@site/src/data/STAFF_SECTION_LIST";
import "@site/src/css/toggle.css";
import StaffCard from "@site/src/components/StaffCard";

const title = "اعضای نشریه";
const desc = "معرفی و راه‌های ارتباطی";


export default function StaffPage() {
    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={title} subtitle={desc}/>
            <main>
                <section className="padding-vert--lg">
                    {assistantsData.map((section, index) => {
                        return (
                            <article key={index} className="container margin-top--lg">
                                <Heading as="h2" className="margin-bottom--lg">
                                    {section.name}
                                </Heading>
                                <div className="row">
                                    {section.staffList.map((staff, index) => (
                                        <StaffCard key={index} staff={staff}/>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </section>
            </main>
        </Layout>
    );
}
