
export type Contact = {
    "method": string,
    "href": string,
    "text": string,
    "image": string,
    "alt": string
}

export const contacts: Contact[] = [
    {
        method: "Email",
        href: "mailto:alexander.pressfelt@medieinstitutet.se",
        text: "alexander.pressfelt@medieinstitutet.se",
        image: "mail-white.svg",
        alt: "Mail"
    },
    {
        method: "Github",
        href: "https://github.com/AcclaimedAP",
        text: "AcclaimedAP",
        image: "github-mark-white.svg",
        alt: "Github"
        
    },
    {
        method: "LinkedIn",
        href: "https://www.linkedin.com/in/alexander-pressfelt/",
        text: "Alexander Pressfelt",
        image: "linkedin-svgrepo-com.svg",
        alt: "LinkedIn"
    }
]