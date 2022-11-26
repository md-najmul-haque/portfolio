import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {

    const skills = [
        { id: 1, title: 'JavaScript', bgcolor: "#3ABFF8", completed: 85 },
        { id: 2, title: 'Typescript', bgcolor: "#3ABFF8", completed: 80 },
        { id: 3, title: 'React', bgcolor: "#3ABFF8", completed: 90 },
        { id: 4, title: 'React Testing', bgcolor: "#3ABFF8", completed: 75 },
        { id: 5, title: 'Next.js', bgcolor: "#3ABFF8", completed: 75 },
        { id: 6, title: 'Redux', bgcolor: "#3ABFF8", completed: 65 },
        { id: 7, title: 'Redux Toolkit', bgcolor: "#3ABFF8", completed: 65 },
        { id: 8, title: 'Node.js', bgcolor: "#3ABFF8", completed: 85 },
        { id: 9, title: 'Express.js', bgcolor: "#3ABFF8", completed: 85 },
        { id: 10, title: 'Mongoose', bgcolor: "#3ABFF8", completed: 90 },
        { id: 11, title: 'MongoDB', bgcolor: "#3ABFF8", completed: 85 },
        { id: 12, title: 'HTML', bgcolor: "#3ABFF8", completed: 90 },
        { id: 13, title: 'CSS', bgcolor: "#3ABFF8", completed: 90 },
        { id: 14, title: 'SCSS', bgcolor: "#3ABFF8", completed: 90 },
        { id: 15, title: 'Bootstrap', bgcolor: "#3ABFF8", completed: 90 },
        { id: 16, title: 'Tailwind CSS', bgcolor: "#3ABFF8", completed: 90 },
        { id: 17, title: 'Ant Design', bgcolor: "#3ABFF8", completed: 70 },
        { id: 18, title: 'Material UI', bgcolor: "#3ABFF8", completed: 70 },
        { id: 19, title: 'Firebase', bgcolor: "#3ABFF8", completed: 85 },
        { id: 20, title: 'Git', bgcolor: "#3ABFF8", completed: 85 }
    ];



    return (

        <div className='py-10 mt-12'>
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