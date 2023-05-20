import { Contact, contacts } from './contact';
import { Project, projects } from './portfolio';
import { Skill, skills } from './skills';
import './style.scss'

function createSkillHTML(skill: Skill) {
    const container = document.createElement('div') as HTMLDivElement;
    container.classList.add('skill');
    container.innerHTML = `
        <img src="./skills/${skill.icon}" alt="${skill.alt}">${skill.name}
        <meter min="0" max="10" value=${skill.level}></meter>
    `
    container.setAttribute('title', skill.info);
    return container;
}

function createSkillsContainerHTML():void {
    const container = document.getElementById('skillContainer');
    if (container) {
        for (var skill of skills) {
            container.appendChild(createSkillHTML(skill));
        }
        
    }
}

function createPortfoliotHTML(project: Project) {
    const container = document.createElement('div') as HTMLDivElement;
    container.classList.add('project');
    var tools: string = "";
    var link = "<p>Please ask me for more information!</p>";
    if (project.link) {
        link = `<p><a href="${project.link}">Link to repo</a></p>`;
    }
    for (var i = 0; i < project.tools.length; i++) {
        tools += "<li>" + project.tools[i] + "</li>";
    }
    container.innerHTML = `<h2>${project.title}</h2>
    <h3>${project.date}</h3>
    <p>${project.description}</p>
    <label>Tools & skills utilized: 
    <ul>${tools}</ul>
    </label>
    ${link}
    `

    return container;
}

function createPortfolioContainerHTML(): void {
    const container = document.getElementById('portfoliocontainer');
    if (container) {
        for (var project of projects) {
            container.appendChild(createPortfoliotHTML(project));
        }
    }
}

function createContactHTML(contact: Contact) {
    const container = document.createElement('div') as HTMLDivElement;
    container.classList.add('contact');
    container.innerHTML = `
        <h2>${contact.method}<h2>
        <a href="${contact.href}"><img src="./contact/${contact.image}" alt="${contact.alt}"></a>
        <h3><a href="${contact.href}">${contact.text}</a></h3>

    `

    return container;
}

function createContactContainerHTML(): void {
    const container = document.getElementById('contactcontainer');
    if (container) {
        for (var contact of contacts) {
            container.appendChild(createContactHTML(contact));
        }
    }
}


function init():void {
    
    createSkillsContainerHTML();
    createPortfolioContainerHTML();
    createContactContainerHTML();
}

init();