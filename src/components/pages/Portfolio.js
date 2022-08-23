import React from "react";
import Project from './Project';

const projectInfo = [{
    title: 'Classifieds',
    image: 'image',
    gitHubRepository: 'https://github.com/jsardinas/laughing-broccoli',
    link: 'https://theclassifieds.herokuapp.com/',
},
{
    title: 'BiblioTecha',
    image: 'image',
    gitHubRepository: 'https://github.com/jesusoyer/Bibliotecha-',
    link: 'https://arcane-harbor-36381.herokuapp.com/',
},
{
    title: 'title3',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
},
{
    title: 'title4',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
},
{
    title: 'title5',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
},
{
    title: 'KnowBeforeYouGo',
    image: 'image',
    link: 'https://jschmiett.github.io/KnowBeforeYouGo/',
    gitHubRepository: 'https://github.com/jschmiett/KnowBeforeYouGo',
}]

export default function Portfolio() {
    return (
        <div>
            {projectInfo.map((project) => (
                <Project name={project.title} />
            ))}

        </div>
    );
}
