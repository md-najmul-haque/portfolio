import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>Projects: {id}</h2>
        </div>
    );
};

export default ProjectDetails;