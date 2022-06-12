import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`https://shielded-cliffs-70398.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div id='projects'>
            <h1 className='text-4xl lg:text-5xl text-center  font-bold mb-12 mt-10'> <span className='text-white'>My recent</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>Projects</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;