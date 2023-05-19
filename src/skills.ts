export type Skill = {
    "name": string,
    "icon": string,
    "info": string,
    "alt": string,
    "level": Number
    
}


export const skills: Skill[] = [
    {
        name: "CSS3 & SCSS",
        info: "Knowledge about CSS3 and SASS, including functions, variables, animations, accessiblity, loops and arrays.",
        icon: "css3-svgrepo-com.svg",
        alt: "css3 logo",
        level: 9
    },
    {
        name: "Javascript",
        info: "Deep knowledge about the fundamentals of the language, use cases, functions, scopes, loops, objects, classes, how to write clean code, etc.",
        icon: "javascript-logo-svgrepo-com.svg",
        alt: "javascript logo",
        level: 9
    },
    {
        name: "Typescript",
        info: "Understanding of types, interfaces, script types, advantagesLärodom om typer, strikt typ definering, övertag och säkerhet Typescript ger dig.",
        icon: "typescript.svg",
        alt: "typescript logo",
        level: 8
    },
    {
        name: "Vue.JS",
        info: "Usage of Vue.js' tools to create dynamic and elegant web applications.",
        icon: "vuejs-icon.svg",
        alt: "Vue logo",
        level: 6
    },
    {
        name: "Bundlers",
        info: "Ability to use bundlers such as Parcel, Vite, Webpack, etc. to structure, optimize, and easily publish web applications.",
        icon: "vite.svg",
        alt: "vite logo",
        level: 8
    },
    {
        name: "Jest",
        info: "Ability to use Jest to create Unit tests and integration tests.",
        icon: "jest-seeklogo.com.svg",
        alt: "Jest logo",
        level: 4
    },
    {
        name: "Cypress",
        info: "Knowledge about Cypress to create e2e tests.",
        icon: "370774.svg",
        alt: "Cypress logo",
        level: 4
    },
    {
        name: "React",
        info: "Strong fundamentals and good ability to create web applications using React using it's many tools.",
        icon: "react-2.svg",
        alt: "React logo",
        level: 7
    },
    {
        name: "Figma",
        info: "Ability to use Figma to create a design from the ground as well as scaffolding current projects by prototyping and planning out design choices.",
        icon: "Figma.svg",
        alt: "Figma logo",
        level: 6
    },
    {
        name: "Express",
        info: "Have the ability to create REST APIs, CRUD, using it with databases, and websockets.",
        icon: "expressjs-icon.svg",
        alt: "Express logo",
        level: 9
    },
    {
        name: "MongoDB / Mongoose",
        info: "Knowledge about the pros and cons of using a NoSQL database over SQL, as well as different pros and cons of different alternatives on NoSQL, ability to CRUD and handle databases both through code and manually setting up.",
        icon: "mongodb-icon.svg",
        alt: "MongoDB logo",
        level: 8
    },
    {
        name: "MySQL",
        info: "Knowledge of usecases as well as pros and cons of using SQL databases. We have been using MySQL extensively in our courses.",
        icon: "mysql-icon.svg",
        alt: "MySQL logo",
        level: 8
    },
]