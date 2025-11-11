import clsx from "clsx";
import DocItemAuthors from "@site/src/theme/DocItem/Authors";
import authorsData from "@site/mags/authors.json";
import toFaNum from "@site/src/utils/toFaNum";

import styles from "./styles.module.css";

export type AuthorCalloutProps = {
  author: string | string[];
  headline?: string;
  className?: string;
  children: React.ReactNode;
};

type AuthorSource = {
  name: string;
  title?: string;
  image_url?: string;
  socials?: Record<string, string>;
  url?: string;
  description?: string;
};

const authorMap = authorsData as Record<string, AuthorSource>;

function normalizeAuthor(authorId: string) {
  const author = authorMap[authorId];

  if (!author) {
    console.warn(`Author with id "${authorId}" not found in authors.json`);
    return { name: authorId };
  }

  const { name, title, image_url, socials, url, description } = author;

  return {
    name,
    title: toFaNum(title ?? ""),
    image_url,
    socials,
    url,
    description,
  };
}

export default function AuthorCallout({
  author,
  headline,
  className,
  children,
}: AuthorCalloutProps) {
  const authorIds = Array.isArray(author) ? author : [author];
  const authors = authorIds.map((id) => normalizeAuthor(id));

  return (
    <div className={clsx(styles.callout, className)}>
      {headline && <p className={styles.headline}>{headline}</p>}
      <DocItemAuthors authors={authors} className={styles.authors} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
