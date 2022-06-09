import React from 'react';

const Project = ({ project }) => {
    const { img, title, description, link } = project
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>

                <div className='mt-5'>
                    <a class="btn btn-primary" href={link} rel="noreferrer" role='button' target='_blank'>GitHub</a>
                    <a class="btn btn-primary ml-3" href={link} rel="noreferrer" role='button' target='_blank'>Live Site</a>
                </div>

            </div>
        </div>
    );
};

export default Project;