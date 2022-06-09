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
                        <p>najmul</p>
                        <p>najmul</p>
                        <p>najmul</p>
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