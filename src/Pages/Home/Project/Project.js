import React from 'react';

const Project = ({ project }) => {
    const { img, title, description } = project
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Project;