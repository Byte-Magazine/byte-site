import Link from "@docusaurus/Link";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import React from "react";
import styles from "./index.module.css";
import toFaNum from "@site/src/utils/toFaNum";

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <div className={styles.blogCardGrid}>
        {items.map(({ content: BlogPostContent }) => {
          const { frontMatter, metadata } = BlogPostContent;
          const { title, description, image, tags } = frontMatter;
          const { permalink, readingTime, authors } = metadata;

          const authorsArray = Array.isArray(authors)
            ? authors
            : authors
              ? [authors]
              : [];

          return (
            <div className={styles.blogCard} key={permalink}>
              {image && (
                <div className={styles.blogCardImageWrapper}>
                  <Link to={permalink}>
                    <img
                      className={styles.blogCardImage}
                      src={image}
                      alt={title}
                    />
                  </Link>
                </div>
              )}
              <div className={styles.blogCardContent}>
                <h2 className={styles.blogCardTitle}>
                  <Link to={permalink}>{title}</Link>
                </h2>
                {description && (
                  <p className={styles.blogCardDescription}>
                    {description.length > 100
                      ? `${description.slice(0, 100)}...`
                      : description}
                  </p>
                )}

                {tags && tags.length > 0 && (
                  <div className={styles.blogCardTags}>
                    {tags.map((tag) => (
                      <Link
                        className={styles.blogCardTag}
                        key={tag}
                        to={`/blog/tags/${tag}`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}

                {(authorsArray.length > 0 || readingTime) && (
                  <div className={styles.blogCardFooter}>
                    {authorsArray.length > 0 && (
                      <div className={styles.blogCardAuthors}>
                        {authorsArray.map((author, idx) => (
                          <div className={styles.blogCardAuthor} key={idx}>
                            {author.imageURL && (
                              <img
                                src={author.imageURL}
                                alt={author.name}
                                className={styles.blogCardAuthorImg}
                              />
                            )}
                            <span className={styles.blogCardAuthorName}>
                              {author.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {readingTime && (
                      <div className={styles.blogCardReadingTime}>
                        {"زمان مطالعه: " +
                          toFaNum(`${Math.ceil(readingTime)}`) +
                          " دقیقه"}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return <BlogListPageContent {...props} />;
}
