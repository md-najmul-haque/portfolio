import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const ProjectDetails = () => {
    const [projectDetails, setProjectDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [id])


    const projectData = projectDetails.filter(
        (project) => parseInt(project.id) === parseInt(id)
    );

    return (
        <div>
            {
                projectData.map(projectDetail => <ProjectDetail key={projectDetail.id} projectDetail={projectDetail}></ProjectDetail>)
            }
        </div>
    );
};

export default ProjectDetails;