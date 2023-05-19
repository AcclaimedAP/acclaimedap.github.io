
export type Project = {
    "title": string,
    "description": string,
    "tools": string[],
    "link"?: string,
    "date": string,
}

export const projects: Project[] = [
    {
        title: "Planning poker group project",
        description: "This is a group project mainly focusing on the agile way of working, as well as git, rather than the actual product. We participated in daily standups, did retrospects, planning, and much more related to it. The actual application is supposed to be a planning poker sort of application, where an admin can send in tasks, and connected users can vote on how much time they think said task will take. Following with storing these. The project utilizes Express and Socket.io in the backend, as well as there being plans to use MySQL. However, once again the focus is on the agile work. There's a trello-like function on github we used to keep track of our tasks and epics. Feel free to check it out!",
        tools: [
            "Typescript", "SASS", "Vite", "Express", "Socket.io", "Agile", "Figma", "Git"
        ],
        link: "https://github.com/Medieinstitutet/fed22d-agila-planning-poker-billy",
        date: "May 2023"
    },
    {
        title: "Gridpainter game",
        description: "A group project where we created a multiplayer game using Socket.io, Mongoose, and express as our backend and Typescript on the front. The game revolves around you being presented with an image, and you together with 3 other people have to remember it and replicate it using a predetermined color, scoring points based on accuracy and speed. Each finished game has its score saved as well as the image. You can also freely paint.",
        tools: [
            "Typescript", "SASS", "Vite", "Express", "Socket.io", "Mongoose", "Figma", "Git"
        ],
        link: "https://github.com/AcclaimedAP/Gridpainter",
        date: "April 2023"
    },
    {
        title: "Documentation creation, reading, updating, and deletion system",
        description: "School project where you can through your user login and create, read, update, documents using TinyMCE editor. It saves it on the backend in a MySQL database. The project is my first time using MySQL and working with relational databases.",
        tools: [
            "SASS", "Vite", "Express", "MySQL", "Git"
        ],
        link: "https://github.com/AcclaimedAP/notes",
        date: "April 2023"
    },
    {
        title: "portfolio in Vue.js",
        description: "I made a portfolio in Vue to practice using it. While it was extremely cool, I felt it didn't hold up to the standard nor did I manage to present myself in the way I wanted to, therefore it is not my current portfolio. I enjoyed the component based style, and managed to really nail that part about it. It uses extensive use of it by breaking down a lot of parts into atoms. Where if I felt it could be broken down even a tiny bit, I did. I did however fail on the SEO part, where I didn't optimize it for that. In the future I hope to recreate a solid page using Vue that looks better and allows me to express myself.",
        tools: [
            "Vue3.js", "SASS", "Vite", "SPA", "Git"
        ],
        link: "https://github.com/AcclaimedAP/cv2023",
        date: "February 2023"
    },
    {
        title: "Idle incremential game",
        description: "For a school project, I got the bright idea to create a game. The game plays itself and the main interaction is to think about how you can optimize your upgrades to become stronger. The game has many moving parts, and was an early project that exceeds 1,5k lines of code. It was also my first attempt at tackling Typescript. I am also in the process of rebuilding this using better planning with more features such as online syncing, guilds, leaderboards, and more. The main points I learned was about structuring code, especially such a big project, as well as keeping things organized, and planning ahead. It also allowed me to work on my vector art a lil bit.",
        tools: [
            "Typescript", "SASS", "Vite", "SPA", "Git", "Inkscape"
        ],
        link: "https://github.com/AcclaimedAP/Incremential-Game-Project",
        date: "November 2022 - December 2022"
    },
    {
        title: "Game in Unity",
        description: "A simple game using the unity engine for my Gymnasiearbete. The goal is to traverse across the map as a barrel to get to the finish line as quickly as possible. There's optional coins to collect as well. The game is meant to showcase the ease of creating games today, and has a report that's linked in the github repo where it's written that it compares it to the earlier days of game development.",
        tools: [
            "C#", "Unity", "Blender", "Git"
        ],
        link: "https://github.com/AcclaimedAP/Barrel-Roll",
        date: "June 2021"
    },
]