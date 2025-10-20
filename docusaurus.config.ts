import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

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
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**', '/**/tags/**'],
                    filename: 'sitemap.xml',
                },
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
                    customCss: './src/css/custom.css',
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
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    themeConfig: {
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
                {to: "/mags/intro", label: "آرشیو نشریه", position: "left"},
                {to: "/blog", label: "وبلاگ", position: "left"},
                {
                    to: "/staff",
                    label: "اعضای مرکزی",
                    position: "right",
                },
                {
                    to: "/authors",
                    label: "نویسندگان",
                    position: "right",
                }
            ],
        },

        footer: {
            style: "dark",
            copyright:
                "© نشریه‌ی علمی فرهنگی بایت - دانشکده مهندسی کامپیوتر - دانشگاه صنعتی شریف"
        },

        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
