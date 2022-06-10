import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div id='projects'>
            <h1 className='text-5xl text-center font-bold my-5'>My Recent <span>Projects</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;