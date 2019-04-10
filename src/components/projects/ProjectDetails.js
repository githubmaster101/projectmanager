import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos autem quam? Suscipit accusantium pariatur provident saepe, consequatur cumque dignissimos recusandae, unde laudantium eum necessitatibus voluptatibus! Expedita est a impedit?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Kevin Christopher</div>
                    <div>8th April 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
