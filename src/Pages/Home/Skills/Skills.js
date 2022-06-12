import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {

    const skills = [
        { id: 1, title: 'JavaScript', bgcolor: "#3ABFF8", completed: 85 },
        { id: 2, title: 'React', bgcolor: "#3ABFF8", completed: 87 },
        { id: 3, title: 'Node.js', bgcolor: "#3ABFF8", completed: 70 },
        { id: 4, title: 'MongoDB', bgcolor: "#3ABFF8", completed: 70 },
        { id: 5, title: 'HTML', bgcolor: "#3ABFF8", completed: 92 },
        { id: 6, title: 'CSS', bgcolor: "#3ABFF8", completed: 87 },
        { id: 7, title: 'Bootstrap', bgcolor: "#3ABFF8", completed: 90 },
        { id: 8, title: 'Tailwind CSS', bgcolor: "#3ABFF8", completed: 90 },
        { id: 9, title: 'Express.js', bgcolor: "#3ABFF8", completed: 65 },
        { id: 10, title: 'Firebase', bgcolor: "#3ABFF8", completed: 85 },
        { id: 11, title: 'TypeScript', bgcolor: "#3ABFF8", completed: 56 },
        { id: 12, title: 'Git', bgcolor: "#3ABFF8", completed: 77 },
    ];



    return (

        <div className='py-10 mt-7'>
            <h2 className='text-4xl lg:text-5xl text-center font-bold'><span className='text-white'>My</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>Skills</span></h2>
            <div data-aos="fade-up" data-aos-duration="1500" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-12 text-white'>
                {skills.map(skill => (
                    <ProgressBar key={skill.id} skill={skill} />
                ))}
            </div>
        </div>

    );
};

export default Skills;