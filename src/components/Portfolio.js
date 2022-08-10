import React from "react";
import Project from './Project';

const projectInfo = {
    title: 'title',
    image: 'image',
    link: 'link',
    gitHubRepository: 'gitHubRepo',
}

export default function Portfolio() {
    return (
        <div>
            <Project name={projectInfo.title} />
        </div>
    );
}
