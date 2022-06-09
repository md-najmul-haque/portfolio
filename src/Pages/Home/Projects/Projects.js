import React from 'react';
import coding from '../../../assets/banner/coding.png'
import Project from '../Project/Project';


const Projects = () => {
    const projects = [
        { id: 1, img: coding, title: 'Gardening Plus', description: 'Designed to place an order, manage an order, make payment, update profile data and give a review for a customer. Here also have nice dashboard with user and admin panel. Here user can manage their ordeer and can make payment and review and admin can also manage orders, make admin, manage products ' },
        { id: 2, img: coding, title: 'NextGen Bike', description: 'Designed to inventory products like add product, stock update, delete a product, etc. If any product is added or updated status then it will automatically update to the home page. ' },
        { id: 3, img: coding, title: 'Zenith estates', description: 'Developed firebase login system here. Also, add Facebook and Google login system. Designed to sell apartments. ' }
    ]
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-5'>My Recent <span>Projects</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;