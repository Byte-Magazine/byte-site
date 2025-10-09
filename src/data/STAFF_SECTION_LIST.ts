export type StaffSection = {
    name: string;
    staffList: Staff[];
};

export type Staff = {
    name: string;
    title?: string;
    imageURL?: string;
    socials: {
        github?: string;
        linkedin?: string;
        x?: string;
        website?: string;
    };
};

const STAFF_SECTION_LIST: StaffSection[] = [
    {
        name: "مدیر مسئول و سردبیر",
        staffList: [
            {
                name: "امیرحسین شهیدی",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/ahsh.jpg",
                socials: {},
            }, {
                name: "آرش شاه‌حسینی",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/authors/ArashShahhosseini.png",
                socials: {
                    github: "https://github.com/arashShahhoseini",
                },
            },
        ],
    },
    {
        name: "تحریریه",
        staffList: [
            {
                name: "آرمان طهماسبی زاده",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/staff/ArmanTahmasbi.jpg",
                socials: {
                    "github": "https://github.com/OstadTahmasb",
                    "linkedin": "https://ir.linkedin.com/in/ostadtahmasb"
                },
            },
            {
                name: "مهدی علی‌نژاد",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/MahdiAlinejhad.jpg",
                socials: {
                    github: "https://github.com/soilorian",
                    linkedin: "https://www.linkedin.com/in/mahdi-alinejad-ba97b6256",
                },
            },
            {
                "name": "آروین طاهری",
                "title": "کارشناسی ۱۴۰۲",
                imageURL: "/img/authors/ArvinTaheri.png",
                "socials": {}
            },
            {
                name: "امیرحسین محمدزاده",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/staff/AmirHosseinMohammadZadeh.jpg",
                socials: {
                    github: "https://github.com/ahmz1833",
                    linkedin: "https://www.linkedin.com/in/ahmz1833/",
                },
            },
            {
                name: "امیرحسین شایان",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/staff/AmirHosseinShayan.jpg",
                socials: {},
            },
            {
                name: "آروین بقال اصل",
                title: "کارشناسی ۱۴۰۳",
                imageURL: "/img/staff/baghal.png",
                socials: {
                    github: "https://github.com/arvinasli"
                },
            },
        ],
    },
    {
        name: "ویراستاری ادبی",
        staffList: [
            {
                name: "امیرحسین صوری",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/AmirHosseinSouri.jpg",
                socials: {
                    github: "https://github.com/Amir14Souri",
                    linkedin: "https://linkedin.com/in/amirhossein-souri",
                },
            },
            {
                name: "امیرمهدی نامجو",
                title: "کارشناسی ۱۳۹۷",
                imageURL: "/img/staff/AmirMahdiNamjoo.jpg",
                socials: {
                    github: "https://github.com/titansarus/",
                    linkedin: "https://www.linkedin.com/in/amirmahdi-namjoo-23b4b9192/",
                    website: "https://amirmahdinamjoo.com/",
                },
            },
            {
                name: "متین غیاثی",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/authors/MatinGhiasi.png",
                socials: {}
            },
            {
                name: "صهیب صادقی",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/staff/SohaibSadeqi.jpg",
                socials: {
                    github: "https://github.com/sohaib-sadeqi",
                },
            },
        ],
    },
    {
        name: "صفحه‌آرایی و گرافیک",
        staffList: [
            {
                name: "معین آعلی",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/moeein.jpg",
                socials: {
                    github: "https://github.com/moeeinaali",
                    linkedin: "https://www.linkedin.com/in/moeein",
                },
            },
            {
                name: "محمد مصیبی",
                title: "کارشناسی ۱۳۹۹",
                imageURL: "/img/staff/MohammadMosayyebi.jpg",
                socials: {},
            },
            {
                name: "امیررضا اینانلو",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/AmirrezaInanloo.jpg",
                socials: {
                    github: "https://github.com/oAmirrezao",
                    linkedin: "https://www.linkedin.com/in/amirreza-inanloo-00576425b",
                },
            },
            {
                name: "سیداحمد موسوی اول",
                title: "کارشناسی ۱۴۰۲",
                imageURL: "/img/staff/seyedahmad.png",
                socials: {
                    github: "https://github.com/seyedahmadmosaviawal",
                },
            },
        ],
    },
    {
        name: "ارتباط با صنعت",
        staffList: [
            {
                name: "امید حیدری",
                title: "کارشناسی ۱۴۰۱",
                imageURL: "/img/staff/omidheidari.jpg",
                socials: {
                    github: "https://github.com/omid-hdr",
                    linkedin: "https://www.linkedin.com/in/omid-hdr/",
                },
            }
        ],
    }
];

export default STAFF_SECTION_LIST;
