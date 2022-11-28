import React from 'react';
import { BsEyeFill, BsGithub } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';

const ProjectDetail = (props) => {
    const { name, screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, clientRepo, serverRepo, liveLink, feature1, feature2, feature3, feature4, feature5, feature6 } = props.projectDetail

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div>
            <h1 className='text-2xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold my-5'>{name} Projects Details</h1>

            <div className="card w-full md:w-7/12 bg-base-100 shadow-2xl mx-auto">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerclass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListclass="custom-dot-list-style"
                    itemclass="carousel-item-padding-40-px"
                >
                    <div className="px-10 pt-10"><img src={screenshot1} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot2} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot3} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot4} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot5} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot5} alt="screenshot" /></div>
                    <div className="px-10 pt-10"><img src={screenshot6} alt="screenshot" /></div>

                </Carousel>

                <div className="card-body items-center  text-secondary text-center">
                    <h2 className="card-title text-4xl">{name}</h2>

                    <p className='text-left text-2xl font-semibold'>Key Feature:</p>
                    <ul className='text-left list-disc px-7 pb-5'>
                        {feature1 && <li>{feature1}</li>}
                        {feature2 && <li>{feature2}</li>}
                        {feature3 && <li>{feature3}</li>}
                        {feature4 && <li>{feature4}</li>}
                        {feature5 && <li>{feature5}</li>}
                        {feature6 && <li>{feature6}</li>}
                    </ul>

                    <div className='flex flex-col md:flex-row gap-3 mt-5'>
                        <a className="btn btn-secondary btn-outline" href={clientRepo} rel="noreferrer" role='button' target='_blank'> <BsGithub /> <span className='ml-2'>Client Side Repository </span></a>
                        {serverRepo ? <a className="btn btn-secondary btn-outline ml-3" href={serverRepo} rel="noreferrer" role='button' target='_blank'><BsGithub /> <span className='ml-2'>Server Side Repository</span> </a> : ''}
                        <a className="btn btn-secondary btn-outline ml-3" href={liveLink} rel="noreferrer" role='button' target='_blank'><BsEyeFill /> <span className='ml-2'>Live Site</span></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;