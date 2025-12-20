import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { ThemeClassNames } from "@docusaurus/theme-common";
import DocItemAuthors from "@theme/DocItem/Authors";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import clsx from "clsx";
import React from "react";
import GiscusComments from "@site/src/components/Comment";

function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const { frontMatter } = useDoc();
  const hideAuthorsInHeader = frontMatter?.hide_authors_in_header === true;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle ? (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
          {!hideAuthorsInHeader && <DocItemAuthors />}
          <MDXContent>{children}</MDXContent>
        </header>
      ) : (
        <>
          {!hideAuthorsInHeader && <DocItemAuthors />}
          <MDXContent>{children}</MDXContent>
        </>
      )}
    </div>
  );
}
