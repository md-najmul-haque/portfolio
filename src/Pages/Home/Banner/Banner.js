import React from 'react';
import coding from '../../../assets/banner/coding.png'
import resumeOfNajmul from '../../../assets/resume/resumeOfNajmul.pdf'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={coding} alt='' />
                </div>
                <div className='flex-1'>
                    <h3 class="text-2xl font-semibold">Hi, I am</h3>
                    <h1 class="text-5xl font-bold my-5">Md Najmul Haque</h1>
                    <h3 class="text-2xl font-semibold">I am a full-stack web developer</h3>

                    <div className='mt-16'>
                        <a class="btn btn-primary" href="#contact" role='button'>Hire Me</a>
                        <a class="btn btn-primary ml-3" href={resumeOfNajmul} download role='button'>Download Resume</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
