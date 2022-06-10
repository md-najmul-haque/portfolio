import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project, setProject] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])

    return (
        <div>
            <h2>Projects: {id}</h2>
            <h2>Name:{project.name}</h2>

        </div>
    );
};

export default ProjectDetails;