import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {

    const skills = [
        { id: 1, title: 'JavaScript', bgcolor: "#6a1b9a", completed: 60 },
        { id: 2, title: 'React', bgcolor: "#00695c", completed: 30 },
        { id: 3, title: 'Node JS', bgcolor: "#ef6c00", completed: 53 },
        { id: 4, title: 'HTML', bgcolor: "#ef6c00", completed: 73 },
        { id: 5, title: 'CSS', bgcolor: "#ef6c00", completed: 73 },
        { id: 6, title: 'Bootstrap', bgcolor: "#ef6c00", completed: 73 },
        { id: 7, title: 'Tailwind CSS', bgcolor: "#ef6c00", completed: 73 },
        { id: 8, title: 'Express JS', bgcolor: "#ef6c00", completed: 73 },
        { id: 9, title: 'Firebase', bgcolor: "#ef6c00", completed: 73 },
    ];


    return (

        <div className=''>
            <h2 className='text-5xl text-center my-5'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {skills.map(skill => (
                    <ProgressBar key={skill.id} skill={skill} />
                ))}
            </div>
        </div>

    );
};

export default Skills;