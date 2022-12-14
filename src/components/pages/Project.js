import React from "react";

export default function Project(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div>
                        <img className="image" src={props.image} />
                    </div>
                    <div>
                        <a href={props.link}>View my project</a>
                    </div>
                    <div>
                        <a href={props.gitHubRepository}>View my GitHub repository</a>
                    </div>
                </div>
            </div>
        </div >
    );

}
