(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const r=[{method:"Email",href:"mailto:alexander.pressfelt@medieinstitutet.se",text:"alexander.pressfelt@medieinstitutet.se",image:"mail-white.svg",alt:"Mail"},{method:"Github",href:"https://github.com/AcclaimedAP",text:"AcclaimedAP",image:"github-mark-white.svg",alt:"Github"},{method:"LinkedIn",href:"https://www.linkedin.com/in/alexander-pressfelt/",text:"Alexander Pressfelt",image:"linkedin-svgrepo-com.svg",alt:"LinkedIn"}],l=[{title:"Planning poker group project",description:"This is a group project mainly focusing on the agile way of working, as well as git, rather than the actual product. We participated in daily standups, did retrospects, planning, and much more related to it. The actual application is supposed to be a planning poker sort of application, where an admin can send in tasks, and connected users can vote on how much time they think said task will take. Following with storing these. The project utilizes Express and Socket.io in the backend, as well as there being plans to use MySQL. However, once again the focus is on the agile work. There's a trello-like function on github we used to keep track of our tasks and epics. Feel free to check it out!",tools:["Typescript","SASS","Vite","Express","Socket.io","Agile","Figma","Git"],link:"https://github.com/Medieinstitutet/fed22d-agila-planning-poker-billy",date:"May 2023"},{title:"Gridpainter game",description:"A group project where we created a multiplayer game using Socket.io, Mongoose, and express as our backend and Typescript on the front. The game revolves around you being presented with an image, and you together with 3 other people have to remember it and replicate it using a predetermined color, scoring points based on accuracy and speed. Each finished game has its score saved as well as the image. You can also freely paint.",tools:["Typescript","SASS","Vite","Express","Socket.io","Mongoose","Figma","Git"],link:"https://github.com/AcclaimedAP/Gridpainter",date:"April 2023"},{title:"Documentation creation, reading, updating, and deletion system",description:"School project where you can through your user login and create, read, update, documents using TinyMCE editor. It saves it on the backend in a MySQL database. The project is my first time using MySQL and working with relational databases.",tools:["SASS","Vite","Express","MySQL","Git"],link:"https://github.com/AcclaimedAP/notes",date:"April 2023"},{title:"portfolio in Vue.js",description:"I made a portfolio in Vue to practice using it. While it was extremely cool, I felt it didn't hold up to the standard nor did I manage to present myself in the way I wanted to, therefore it is not my current portfolio. I enjoyed the component based style, and managed to really nail that part about it. It uses extensive use of it by breaking down a lot of parts into atoms. Where if I felt it could be broken down even a tiny bit, I did. I did however fail on the SEO part, where I didn't optimize it for that. In the future I hope to recreate a solid page using Vue that looks better and allows me to express myself.",tools:["Vue3.js","SASS","Vite","SPA","Git"],link:"https://github.com/AcclaimedAP/cv2023",date:"February 2023"},{title:"Idle incremential game",description:"For a school project, I got the bright idea to create a game. The game plays itself and the main interaction is to think about how you can optimize your upgrades to become stronger. The game has many moving parts, and was an early project that exceeds 1,5k lines of code. It was also my first attempt at tackling Typescript. I am also in the process of rebuilding this using better planning with more features such as online syncing, guilds, leaderboards, and more. The main points I learned was about structuring code, especially such a big project, as well as keeping things organized, and planning ahead. It also allowed me to work on my vector art a lil bit.",tools:["Typescript","SASS","Vite","SPA","Git","Inkscape"],link:"https://github.com/AcclaimedAP/Incremential-Game-Project",date:"November 2022 - December 2022"},{title:"Game in Unity",description:"A simple game using the unity engine for my Gymnasiearbete. The goal is to traverse across the map as a barrel to get to the finish line as quickly as possible. There's optional coins to collect as well. The game is meant to showcase the ease of creating games today, and has a report that's linked in the github repo where it's written that it compares it to the earlier days of game development.",tools:["C#","Unity","Blender","Git"],link:"https://github.com/AcclaimedAP/Barrel-Roll",date:"June 2021"}],c=[{name:"CSS3 & SCSS",info:"Knowledge about CSS3 and SASS, including functions, variables, animations, accessiblity, loops and arrays.",icon:"css3-svgrepo-com.svg",alt:"css3 logo",level:9},{name:"Javascript",info:"Deep knowledge about the fundamentals of the language, use cases, functions, scopes, loops, objects, classes, how to write clean code, etc.",icon:"javascript-logo-svgrepo-com.svg",alt:"javascript logo",level:9},{name:"Typescript",info:"Understanding of types, interfaces, script types, advantagesLärodom om typer, strikt typ definering, övertag och säkerhet Typescript ger dig.",icon:"typescript.svg",alt:"typescript logo",level:8},{name:"Vue.JS",info:"Usage of Vue.js' tools to create dynamic and elegant web applications.",icon:"vuejs-icon.svg",alt:"Vue logo",level:6},{name:"Bundlers",info:"Ability to use bundlers such as Parcel, Vite, Webpack, etc. to structure, optimize, and easily publish web applications.",icon:"vite.svg",alt:"vite logo",level:8},{name:"Jest",info:"Ability to use Jest to create Unit tests and integration tests.",icon:"jest-seeklogo.com.svg",alt:"Jest logo",level:4},{name:"Cypress",info:"Knowledge about Cypress to create e2e tests.",icon:"370774.svg",alt:"Cypress logo",level:4},{name:"React",info:"Strong fundamentals and good ability to create web applications using React using it's many tools.",icon:"react-2.svg",alt:"React logo",level:7},{name:"Figma",info:"Ability to use Figma to create a design from the ground as well as scaffolding current projects by prototyping and planning out design choices.",icon:"Figma.svg",alt:"Figma logo",level:6},{name:"Express",info:"Have the ability to create REST APIs, CRUD, using it with databases, and websockets.",icon:"expressjs-icon.svg",alt:"Express logo",level:9},{name:"MongoDB / Mongoose",info:"Knowledge about the pros and cons of using a NoSQL database over SQL, as well as different pros and cons of different alternatives on NoSQL, ability to CRUD and handle databases both through code and manually setting up.",icon:"mongodb-icon.svg",alt:"MongoDB logo",level:8},{name:"MySQL",info:"Knowledge of usecases as well as pros and cons of using SQL databases. We have been using MySQL extensively in our courses.",icon:"mysql-icon.svg",alt:"MySQL logo",level:8}];function d(e){const t=document.createElement("div");return t.classList.add("skill"),t.innerHTML=`
        <img src="./skills/${e.icon}" alt="${e.alt}">${e.name}
        <meter min="0" max="10" value=${e.level}></meter>
    `,t.setAttribute("title",e.info),t}function p(){const e=document.getElementById("skillContainer");if(e)for(var t of c)e.appendChild(d(t))}function g(e){const t=document.createElement("div");t.classList.add("project");var n="",a="<p>Please ask me for more information!</p>";e.link&&(a=`<p><a href="${e.link}">Link to repo</a></p>`);for(var o=0;o<e.tools.length;o++)n+="<li>"+e.tools[o]+"</li>";return t.innerHTML=`<h2>${e.title}</h2>
    <h3>${e.date}</h3>
    <p>${e.description}</p>
    <label>Tools & skills utilized: 
    <ul>${n}</ul>
    </label>
    ${a}
    `,t}function u(){const e=document.getElementById("portfoliocontainer");if(e)for(var t of l)e.appendChild(g(t))}function m(e){const t=document.createElement("div");return t.classList.add("contact"),t.innerHTML=`
        <h2>${e.method}<h2>
        <a href="${e.href}"><img src="./contact/${e.image}" alt="${e.alt}"></a>
        <h3><a href="${e.href}">${e.text}</a></h3>

    `,t}function h(){const e=document.getElementById("contactcontainer");if(e)for(var t of r)e.appendChild(m(t))}function f(){p(),u(),h()}f();
