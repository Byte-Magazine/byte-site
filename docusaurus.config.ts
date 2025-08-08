import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "نشریه‌ی علمی فرهنگی بایت",
    tagline: "دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف",
    favicon: "img/favicon.ico",

    future: {
        v4: true,
    },

    url: 'https://byte-mag.ir',
    baseUrl: "/",

    organizationName: "Byte-Magazine",
    projectName: "byte-site",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "fa",
        locales: ["fa"],
        localeConfigs: {
            fa: {
                label: "فارسی",
                direction: "rtl",
            },
        },
    },

    presets: [
        [
            "classic",
            {
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**', '/**/tags/**'],
                    filename: 'sitemap.xml',
                },
                // docs: {
                //     sidebarPath: "./sidebars.ts",
                //     editUrl:
                //         "https://github.com/Byte-Magazine/byte-site/tree/main/",
                // },
                blog: {
                    blogTitle: "وبلاگ",
                    blogDescription: "وبلاگ نشریه‌ی بایت",
                    postsPerPage: "ALL",
                    blogSidebarTitle: "مطالب منتشر شده",
                    blogSidebarCount: "ALL",
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    editUrl: "https://github.com/Byte-Magazine/byte-site/tree/main/",
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "mags",
                path: "mags",
                routeBasePath: "mags",
                sidebarPath: require.resolve("./sidebarsMags.js"),
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
                showLastUpdateAuthor: false,
                showLastUpdateTime: false,
            },
        ],
    ],
    stylesheets: [
        {
            href: "/css/custom.css",
            type: "text/css",
        },
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-mll67QQsFfWbT1xWQ+Z1sbbdUUrwVlf4lH5Dm61St1nO4jkHknwYlB3RZgQs9gIh",
            crossorigin: "anonymous",
        }
    ],
    themeConfig: {
        // algolia: {
        //     appId: 'YOUR_APP_ID',
        //     apiKey: 'YOUR_PUBLIC_API_KEY',
        //     indexName: 'YOUR_INDEX_NAME',
        //     contextualSearch: true,
        // },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        image: "img/social-card.png",
        navbar: {
            style: "dark",
            title: "نشریه‌ی علمی فرهنگی بایت",
            logo: {
                alt: "logo",
                src: "img/logo.svg",
            },
            items: [
                {to: "#", label: "وبلاگ (بزودی)", position: "left"},
                {to: "/mags/intro", label: "آرشیو نشریه", position: "left"},
                {
                    href: "https://t.me/byte-mag/",
                    label: "کانال تلگرام",
                    position: "right",
                },
                {
                    to: "/staff",
                    label: "اعضای مرکزی",
                    position: "left",
                },
                {
                    to: "/authors",
                    label: "نویسندگان",
                    position: "left",
                }
            ],
        },

        footer: {
            style: "dark",
            copyright: `© نشریه‌ی علمی فرهنگی بایت - دانشکده مهندسی کامپیوتر - دانشگاه صنعتی شریف`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
