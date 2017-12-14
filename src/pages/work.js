import React from 'react'
import Link from 'gatsby-link'
import leafSketch from '../images/leafSketch.jpg'
import styles from '../styles/pages/work.module.css'

const WorkPage = () =>
    <div className={styles.contentWrapper}>
        <img src={leafSketch} className='image'/>
        <h1 className='heading'>Work</h1>
        <p className={styles.text}>
            Projects Go Here
        </p>
    </div>
export default WorkPage
