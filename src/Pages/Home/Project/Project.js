import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, img, name, description, liveLink } = project
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

                <div className='mt-5'>
                    <Link className="btn btn-primary ml-3" to={`/projects/${_id}`}>Explore Detail</Link>
                    <a className="btn btn-primary ml-3" href={liveLink} rel="noreferrer" role='button' target='_blank'>Live Site</a>
                </div>

            </div>
        </div>
    );
};

export default Project;