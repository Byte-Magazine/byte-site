import React, { type ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";

export default function NotFoundContent({ className }: Props): ReactNode {
    return (
        <main className={clsx("container margin-vert--xl", className)}>
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h1" className="hero__title">
                        صفحه ای که دنبالشی نیستش ):
                    </Heading>
                    <p>به نظرت چی کار کنیم؟🤔</p>
                    <p>یه پیام به پشتیبانی بده. اوکی میکنه برات... خیالت راحت👍</p>
                </div>
            </div>
        </main>
    );
}