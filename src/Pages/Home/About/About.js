import React from 'react';
import { Link } from 'react-router-dom';
import coding from '../../../assets/banner/coding.png'

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src={coding} alt='' />
                    </div>
                    <div className='flex-1'>
                        <h3 class="text-2xl font-semibold">Hi, I am</h3>
                        <h1 class="text-5xl font-bold my-5">Md Najmul Haque</h1>
                        <h3 class="text-2xl font-semibold">I am a full-stack web developer</h3>
                        <div className='mt-16'>
                            <a class="btn btn-primary" href="https://www.linkedin.com/in/md-najmul-haque/" rel="noreferrer" role='button' target='_blank'>LinkedIn</a>
                            <a class="btn btn-primary ml-3" href="https://github.com/md-najmul-haque" rel="noreferrer" role='button' target='_blank'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;