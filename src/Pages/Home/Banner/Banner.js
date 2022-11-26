import React from 'react';
import najmul from '../../../assets/banner/najmul.png'
import resume from '../../../assets/resume/ResumeOfNajmulHaque.pdf'
import Typewriter from 'typewriter-effect';

const Banner = () => {

    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row-reverse items-center">
                    <div className='flex-1 w-full'>
                        <img src={najmul} alt='' />
                    </div>

                    <div className='flex-1 w-full pl-2 lg:pl-0'>
                        <h3 className="text-2xl font-semibold">Hi, I am</h3>
                        <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent my-5">Md Najmul Haque</h1>
                        <h2 className="text-3xl lg:text-4xl font-bold my-5">
                            <Typewriter
                                options={{
                                    strings: ['I am a Tech Lover', 'I am a Programmer', 'I am a Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <div className='mt-16'>
                            <a className="btn btn-outline btn-primary" href="#contact" role='button'>Hire Me</a>
                            <a className="btn btn-outline btn-primary ml-3" href={resume} download role='button'>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
