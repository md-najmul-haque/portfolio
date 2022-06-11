import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {

    const skills = [
        { id: 1, title: 'JavaScript', bgcolor: "#6a1b9a", completed: 85 },
        { id: 2, title: 'React', bgcolor: "#3ABFF8", completed: 87 },
        { id: 3, title: 'Node JS', bgcolor: "#ef6c00", completed: 70 },
        { id: 4, title: 'Mongo DB', bgcolor: "#36D399", completed: 70 },
        { id: 5, title: 'HTML', bgcolor: "#6a1b9a", completed: 92 },
        { id: 6, title: 'CSS', bgcolor: "#3ABFF8", completed: 87 },
        { id: 7, title: 'Bootstrap', bgcolor: "#6a1b9a", completed: 90 },
        { id: 8, title: 'Tailwind CSS', bgcolor: "#3ABFF8", completed: 90 },
        { id: 9, title: 'Express JS', bgcolor: "#ef6c00", completed: 65 },
        { id: 10, title: 'Firebase', bgcolor: "#FBBD23", completed: 85 },
        { id: 11, title: 'TypeScript', bgcolor: "#FBBD23", completed: 56 },
        { id: 12, title: 'Git', bgcolor: "#FBBD23", completed: 77 },
    ];


    return (

        <div className='py-10 text-white'>
            <h2 className='text-5xl text-center font-bold mb-5'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-12'>
                {skills.map(skill => (
                    <ProgressBar key={skill.id} skill={skill} />
                ))}
            </div>
        </div>

    );
};

export default Skills;