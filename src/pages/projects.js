import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project'
import leafSketch from '../images/leafSketch.jpg'
import votrScreenshot from '../images/votr-screenshot.jpeg'
import styles from '../styles/pages/projects.module.css'
import projectList from '../project-list'

const ProjectsPage = () =>
    <div className={styles.contentWrapper}>
        <img src={leafSketch} className='image'/>
        <h1 className='heading'>Projects</h1>
        <div>
            {projectList.length > 0 && 
            <div>
                {projectList.map((project, i) =>
                    <Project info={project} key={i} />
                )}
            </div>}
        </div>
    </div>
export default ProjectsPage
