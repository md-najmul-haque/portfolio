import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';

const Project = ({ project }) => {
    const { id, img, name, description, liveLink } = project
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="card w-96 bg-base-100 shadow-xl hover:shadow-primary mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-secondary">{name}</h2>
                <p className='text-secondary'>{description}</p>

                <div className='mt-5'>
                    <Link className="btn btn-primary  text-black ml-3" to={`/projects/${id}`}>Explore Details</Link>
                    <a className="btn btn-primary text-black ml-3" href={liveLink} rel="noreferrer" role='button' target='_blank'><BsEyeFill /> <span className='ml-2'>Live Site</span></a>
                </div>
            </div>
        </div>
    );
};

export default Project;