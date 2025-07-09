export type StaffSection = {
    name: string,
    staffList: Staff[]
}

export type Staff = {}

const STAFF_SECTION_LIST: StaffSection[] = [
    {
        name: "مدیر مسئول",
        staffList: [
            {
                name: "امیرحسین شهیدی",
                title: "ورودی ۱۴۰۱",
                email: "amirahsh@gmail.com",
                imageURL: "/img/staff/ElaheKhodaverdi.jpg",
                socials: {
                    github: "https://github.com/amirahsh",
                    linkedin: "https://www.linkedin.com/in/amirahsh",
                    x: "https://www.linkedin.com/in/amirahsh",
                },
            },
        ],
    },
];

export default STAFF_SECTION_LIST;