import React from 'react';
import coding from '../../../assets/banner/coding.png'
import resumeOfNajmul from '../../../assets/resume/resumeOfNajmul.pdf'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="hero min-h-screen text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={coding} alt='' />
                </div>

                <div className='flex-1'>
                    <h3 className="text-2xl font-semibold">Hi, I am</h3>
                    <h1 className="text-5xl font-bold my-5">Md Najmul Haque</h1>
                    <h2 className="text-4xl font-bold my-5">
                        <Typewriter
                            options={{
                                strings: ['I am a Tech Lover', 'I am a Programmer', 'I am a MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className='mt-16'>
                        <a className="btn btn-primary" href="#contact" role='button'>Hire Me</a>
                        <a className="btn btn-primary ml-3" href={resumeOfNajmul} download role='button'>Download Resume</a>
                    </div>
                </div>

                {/* <div className='flex-1'>
                    <h3 className="text-2xl font-semibold">Hi, I am</h3>
                    
                    <h3 className="text-2xl font-semibold">I am a full-stack web developer</h3>

                    <div className='mt-16'>
                        <a className="btn btn-primary" href="#contact" role='button'>Hire Me</a>
                        <a className="btn btn-primary ml-3" href={resumeOfNajmul} download role='button'>Download Resume</a>
                    </div>

                </div> */}
            </div>
        </div>
    );
};

export default Banner;
