import { queryAllByPlaceholderText } from "@testing-library/react";
import React from "react";
import Project from './Project';

const projectInfo = [{
    title: 'Classifieds',
    image: './LI-In-Bug.png',
    gitHubRepository: 'https://github.com/jsardinas/laughing-broccoli',
    link: 'https://theclassifieds.herokuapp.com/',
},
{
    title: 'BiblioTecha',
    image: './bibliotecha.png',
    gitHubRepository: 'https://github.com/jesusoyer/Bibliotecha-',
    link: 'https://arcane-harbor-36381.herokuapp.com/',
},
{
    title: 'Code Quiz',
    image: './codeQuizPic.png',
    link: 'https://jschmiett.github.io/Week4Quiz/',
    gitHubRepository: 'https://github.com/jschmiett/Week4Quiz',
},
{
    title: 'Work Day Scheduler',
    image: './workDayScheduler.png',
    link: 'https://jschmiett.github.io/Week5Scheduler/',
    gitHubRepository: 'https://github.com/jschmiett/Week5Scheduler',
},
{
    title: 'Password Generator',
    image: './passwordGenerator.png',
    link: 'https://jschmiett.github.io/Week3PasswordGenerator/',
    gitHubRepository: 'https://github.com/jschmiett/Week3PasswordGenerator',
},
{
    title: 'KnowBeforeYouGo',
    image: './knowBeforeYouGo.png',
    link: 'https://jschmiett.github.io/KnowBeforeYouGo/',
    gitHubRepository: 'https://github.com/jschmiett/KnowBeforeYouGo',
}]

export default function Portfolio() {
    return (
        <div>
            {projectInfo.map((project) => (
                <Project name={project.title} image={project.image} link={project.link} gitHubRepository={project.gitHubRepository} />

            ))}

        </div>
    );
}
