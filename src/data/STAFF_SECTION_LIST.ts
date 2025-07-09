export type StaffSection = {
    name: string,
    staffList: Staff[]
}

export type Staff = {
    name: string,
    title?: string,
    email?: string,
    imageURL?: string,
    socials: {
        github?: string,
        linkedin?: string,
        x?: string,
        website?: string,
    }
}

const STAFF_SECTION_LIST: StaffSection[] = [
    {
        name: "مدیر مسئول",
        staffList: [
            {
                name: "امیرحسین شهیدی",
                title: "ورودی ۱۴۰۱",
                email: "amirahsh@gmail.com",
                imageURL: "/img/staff/ahsh.jpg",
                socials: {
                    github: "https://github.com/amirahsh",
                    linkedin: "https://www.linkedin.com/in/amirahsh",
                    x: "https://www.linkedin.com/in/amirahsh",
                    website: "https://www.website.com/amirahsh",
                },
            },
        ],
    },
    {
        name: "بیکار",
        staffList: [
            {
                name: "معین آعلی",
                title: "ورودی ۱۴۰۱",
                email: "amirahsh@gmail.com",
                imageURL: "/img/staff/moeein.jpg",
                socials: {
                    github: "https://github.com/moeeinaali",
                    linkedin: "https://www.linkedin.com/in/moeein",
                },
            },

        ],
    },
];

export default STAFF_SECTION_LIST;