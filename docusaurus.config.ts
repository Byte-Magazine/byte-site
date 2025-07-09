import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "نشریه‌ی علمی بایت",
    tagline: "دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف",
    favicon: "img/favicon.ico",

    future: {
        v4: true,
    },

    url: "https://byte-mag.ir",
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
                // docs: {
                //     sidebarPath: "./sidebars.ts",
                //     editUrl:
                //         "https://github.com/Byte-Magazine/byte-site/tree/main/",
                // },
                blog: {
                    blogTitle: 'وبلاگ',
                    blogDescription: 'وبلاگ نشریه‌ی بایت',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'مطالب منتشر شده',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    editUrl:
                        "https://github.com/Byte-Magazine/byte-site/tree/main/",
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
            '@docusaurus/plugin-content-docs',
            {
                id: 'mags',
                path: 'mags',
                routeBasePath: 'mags',
                sidebarPath: require.resolve('./sidebarsMags.js'),
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],

    ],
    stylesheets: [
        {
            href: '/css/custom.css',
            type: 'text/css',
        },
    ],
    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "نشریه‌ی علمی بایت",
            logo: {
                alt: "logo",
                src: "img/logo.png",
            },
            items: [
                {to: "/mags/intro", label: "نشریه", position: "left"},
                {to: "/blog", label: "وبلاگ", position: "left"},
                // {
                //     href: "https://github.com/byte-magazine/byte-site",
                //     label: "GitHub",
                //     position: "right",
                // },
                {
                    to: "/staff",
                    label: "اعضا",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `© نشریه‌ی علمی بایت - دانشکده مهندسی کامپیوتر - دانشگاه صنعتی شریف`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
