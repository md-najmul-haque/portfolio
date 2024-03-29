import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import coding1 from '../../../assets/banner/coding1.png'

const About = () => {
    return (
        <div id='about'>
            <h1 className='text-4xl lg:text-5xl text-center font-bold '><span className='text-white'>About</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'> Me</span></h1>
            <div className="hero min-h-fit text-white">
                <div className="hero-content flex-col lg:flex-row mt-14">
                    <div data-aos="fade-right" data-aos-duration="1500" className='flex-1'>
                        <img src={coding1} alt='' />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='flex-1'>
                        <p className='text-justify'>Hello! I'm Md Najmul Haque, a programmer. I have developed various projects using various technology like React.js, Next.js, Redux, JavaScript, Typescript, Node.js, Express.js, MongoDB, etc. I love coding and my dream is to be a world-class programmer and want to build a dynamic career in this sector.</p>
                        <p className='my-4 text-justify'>I love to take on challenges to do any type of project. I am a very quick learner, a dedicated hard worker, and also have the problem-solving ability. I have the confidence to make my challenge successful.</p>
                        <p className='text-justify'>I consider myself as a fully dedicated, dynamic, punctual, efficient, quick responder, and good team player. I am very passionate to build my career in this sector and utilize my knowledge and personal skills in Web Development.</p>
                        <div className='mt-5'>
                            <a className="btn btn-outline btn-primary" href="https://www.linkedin.com/in/md-najmul-haque/" rel="noreferrer" role='button' target='_blank'><BsLinkedin /> <span className='ml-2'>LinkedIn</span></a>
                            <a className="btn btn-outline btn-primary ml-3" href="https://github.com/md-najmul-haque" rel="noreferrer" role='button' target='_blank'><BsGithub /><span className='ml-2'>GitHub</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;