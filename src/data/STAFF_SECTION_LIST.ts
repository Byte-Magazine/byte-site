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
    name: "دبه",
    staffList: [
      {
        name: "امیرحسین شهیدی",
        title: "ورودی ۱۴۰۱ کارشناسی",
        email: "amirahsh20041382@gmail.com",
        imageURL: "/img/staff/ahsh.jpg",
        socials: {
        },
      },
    ],
  },
  {
    name: "بیکار",
    staffList: [
      {
        name: "معین آعلی",
        title: "ورودی ۱۴۰۱ کارشناسی",
        email: "amirahsh@gmail.com",
        imageURL: "/img/staff/moeein.jpg",
        socials: {
          github: "https://github.com/moeeinaali",
          linkedin: "https://www.linkedin.com/in/moeein",
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
          github: "",
          linkedin: "",
          x: "",
          website: "",
        },
      },
      {
        name: "مهدی علی‌نژاد",
        title: "Mahdi Alinejad",
        email: "m1382a11n24@gmail.com",
        imageURL: "/img/staff/MahdiAlinejhad.jpg",
        socials: {
          github: "Github.com/soilorian",
          linkedin: "Https://www.linkedin.com/in/mahdi-alinejad-ba97b6256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          x: "",
          website: "",
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
          x: "",
          website: "Option 1",
        },
      },
    ],
  },
  {
    name: "ویراستاری",
    staffList: [
      {
        name: "امیرحسین صوری",
        title: "Amirhossein Souri",
        email: "amirhsnsouri@gmail.com",
        imageURL: "/img/staff/AmirHosseinSouri.jpg",
        socials: {
          github: "https://github.com/Amir14Souri",
          linkedin: "https://linkedin.com/in/amirhossein-souri",
          x: "",
          website: "",
        },
      },
      {
        name: "امیرمهدی نامجو",
        title: "Amirmahdi Namjoo",
        email: "amirm137878@gmail.com",
        imageURL: "/img/staff/AmirMahdiNamjoo.jpg",
        socials: {
          github: "http://github.com/titansarus/",
          linkedin: "https://www.linkedin.com/in/amirmahdi-namjoo-23b4b9192/",
          x: "",
          website: "https://amirmahdinamjoo.com/",
        },
      },
    ],
  },
  {
    name: "صفحه‌آرایی",
    staffList: [
      {
        name: "معین آعلی",
        title: "Moeein Aali",
        email: "moeeeinaali@gmail.com",
        imageURL: "/img/staff/moeein.jpg",
        socials: {
          github: "https://github.com/moeeinaali",
          linkedin: "https://www.linkedin.com/in/moeein",
          x: "",
          website: "",
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
          github: "github.com/Aref-Shahbakhsh",
          linkedin: "www.linkedin.com/in/Aref-Shahbakhsh",
          x: "",
          website: "Aref-shahbakhsh.github.io",
        },
      },
      {
        name: "امیرحسین انصاری",
        title: "Amir Hossein Ansari",
        email: "amirhosein.ansari79@gmail.com",
        imageURL: "/img/staff/AmirHosseinAnsari.jpg",
        socials: {
          github: "",
          linkedin: "https://www.linkedin.com/in/amir-hossein-ansari-b4bba5241",
          x: "",
          website: "https://scholar.google.com/citations?hl=en&user=TyUGU_AAAAAJ",
        },
      },
    ],
  },
];

export default STAFF_SECTION_LIST;
