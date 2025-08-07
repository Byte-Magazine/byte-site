export type StaffSection = {
    name: string;
    staffList: Staff[];
};

export type Staff = {
    name: string;
    title?: string;
    email?: string;
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
                title: "ورودی ۱۴۰۱ کارشناسی",
                email: "amirahsh20041382@gmail.com",
                imageURL: "/img/staff/ahsh.jpg",
                socials: {},
            }, {
                name: "آرش شاه‌حسینی",
                title: "ورودی ۱۴۰۲ کارشناسی",
                email: "arash.shahhosseinii@gmail.com",
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
                title: "Arman Tahmasebi",
                email: "arman.tahmasebizadeh@gmail.com",
                imageURL: "/img/staff/ArmanTahmasbi.jpg",
                socials: {
                    "github": "https://github.com/OstadTahmasb",
                    "linkedin": "https://ir.linkedin.com/in/ostadtahmasb"
                },
            },
            {
                name: "مهدی علی‌نژاد",
                title: "Mahdi Alinejad",
                email: "m1382a11n24@gmail.com",
                imageURL: "/img/staff/MahdiAlinejhad.jpg",
                socials: {
                    github: "https://github.com/soilorian",
                    linkedin: "https://www.linkedin.com/in/mahdi-alinejad-ba97b6256",
                },
            },
            {
                name: "امیرحسین محمدزاده",
                title: "AmirHossein MohammadZadeh",
                email: "ahmz183383@gmail.com",
                imageURL: "/img/staff/AmirHosseinMohammadZadeh.jpg",
                socials: {
                    github: "https://github.com/ahmz1833",
                    linkedin: "https://www.linkedin.com/in/ahmz1833/",
                },
            },
        ],
    },
    {
        name: "ویراستاری ادبی",
        staffList: [
            {
                name: "امیرحسین صوری",
                title: "Amirhossein Souri",
                email: "amirhsnsouri@gmail.com",
                imageURL: "/img/staff/AmirHosseinSouri.jpg",
                socials: {
                    github: "https://github.com/Amir14Souri",
                    linkedin: "https://linkedin.com/in/amirhossein-souri",
                },
            },
            {
                name: "امیرمهدی نامجو",
                title: "Amirmahdi Namjoo",
                email: "amirm137878@gmail.com",
                imageURL: "/img/staff/AmirMahdiNamjoo.jpg",
                socials: {
                    github: "https://github.com/titansarus/",
                    linkedin: "https://www.linkedin.com/in/amirmahdi-namjoo-23b4b9192/",
                    website: "https://amirmahdinamjoo.com/",
                },
            },
        ],
    },
    {
        name: "صفحه‌آرایی و گرافیک",
        staffList: [
            {
                name: "معین آعلی",
                title: "Moeein Aali",
                email: "moeeeinaali@gmail.com",
                imageURL: "/img/staff/moeein.jpg",
                socials: {
                    github: "https://github.com/moeeinaali",
                    linkedin: "https://www.linkedin.com/in/moeein",
                },
            },
            {
                name: "محمد مصیبی",
                title: "Mohammad Mosayyebi",
                email: "mohammad.moasayebi@gmail.com",
                imageURL: "/img/staff/MohammadMosayyebi.jpg",
                socials: {},
            },
            {
                name: "امیررضا اینانلو",
                title: "Amirreza Inanloo",
                email: "amirreza.inanloo.sut@gmail.com",
                imageURL: "/img/staff/AmirrezaInanloo.jpg",
                socials: {
                    github: "https://github.com/oAmirrezao",
                    linkedin: "https://www.linkedin.com/in/amirreza-inanloo-00576425b",
                },
            },
        ],
    },
    {
        name: "نویسندگان",
        staffList: [
            {
                name: "عارف شه بخش",
                title: "Aref Shahbakhsh",
                email: "aref.shahbakhsh1998@gmail.com",
                imageURL: "/img/staff/ArefShahbakhsh.jpg",
                socials: {
                    github: "https://github.com/Aref-Shahbakhsh",
                    linkedin: "https://www.linkedin.com/in/Aref-Shahbakhsh",
                    website: "https://Aref-shahbakhsh.github.io",
                },
            },
            {
                name: "امیرحسین انصاری",
                title: "Amir Hossein Ansari",
                email: "amirhosein.ansari79@gmail.com",
                imageURL: "/img/staff/AmirHosseinAnsari.jpg",
                socials: {
                    linkedin: "https://www.linkedin.com/in/amir-hossein-ansari-b4bba5241",
                    website: "https://scholar.google.com/citations?hl=en&user=TyUGU_AAAAAJ",
                },
            },
            {
                name: "لیلا علوی",
                title: "Leila Alavi",
                email: "leilaalavitaba@gmail.com",
                imageURL: "/img/staff/LeilaSadatAlavi.jpg",
                socials: {},
            },
            {
                name: "امیرمهدی کوششی",
                title: "Dutchman",
                email: "amkamir96@gmail.com",
                imageURL: "/img/staff/Dutchman.jpeg",
                socials: {
                    github: "https://github.com/amkamir82",
                },
            },
            {
                name: "عماد امام‌جمعه",
                title: "Emad Emamojomeh",
                email: "s.emad.emamjomeh@gmail.com",
                imageURL: "/img/staff/EmadEmamJome.jpg",
                socials: {
                    github: "https://github.com/EmadEJ",
                    linkedin: "https://www.linkedin.com/in/emad-emamjomeh/",
                },
            },
            {
                name: "بردیا رضائی کلانتری",
                title: "bardia rezaei kalantari",
                email: "bardiarezaeikalantari@gmail.com",
                imageURL: "/img/authors/BardiaRezaei.jpg",
                socials: {},
            },
        ],
    },
];

export default STAFF_SECTION_LIST;
