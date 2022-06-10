import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project, setProject] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    const { _id, img, name, description, liveLink } = project

    return (
        <div className=''>

            <h1 className='text-2xl md:text-5xl text-center font-semibold my-5'>{name} Projects Details</h1>

            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className='mt-5'>
                        <Link class="btn btn-primary ml-3" to={`/projects/${_id}`}>Explore Detail</Link>
                        <a class="btn btn-primary ml-3" href={liveLink} rel="noreferrer" role='button' target='_blank'>Live Site</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;