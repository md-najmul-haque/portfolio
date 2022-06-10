import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project, setProject] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://shielded-cliffs-70398.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    const { _id, name, img, screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, clientRepo, serverRepo, liveLink, feature1, feature2, feature3, feature4, feature5, feature6 } = project

    return (
        <div className=''>

            <h1 className='text-2xl md:text-5xl text-center font-semibold my-5'>{name} Projects Details</h1>

            <div class="card w-full md:w-7/12 bg-base-100 shadow-2xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-3xl">{name}</h2>
                    <ul className='text-left list-disc p-7'>
                        <li>{feature1}</li>
                        <li>{feature2}</li>
                        <li>{feature3}</li>
                        <li>{feature4}</li>
                        <li>{feature5}</li>
                        <li>{feature6}</li>
                    </ul>

                    <div className='flex flex-col md:flex-row gap-3 mt-5'>
                        <a class="btn btn-primary" href={clientRepo} rel="noreferrer" role='button' target='_blank'>GitHub Client Side Code</a>
                        <a class="btn btn-primary ml-3" href={serverRepo} rel="noreferrer" role='button' target='_blank'>GitHub Client Side Code</a>
                        <a class="btn btn-primary ml-3" href={liveLink} rel="noreferrer" role='button' target='_blank'>Live Site</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;