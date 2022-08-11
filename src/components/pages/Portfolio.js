import React from "react";
import Project from './Project';

const projectInfo = [{
    title: 'title1',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
},
{
    title: 'title2',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
},
{
    title: 'title3',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
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
