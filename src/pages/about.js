import React from 'react'
import Link from 'gatsby-link'
import crowsSketch from '../images/crowsSketch.jpg'
import styles from '../styles/pages/about.module.css'

const StyledLink = props =>
    <Link className={`${styles.contact} ${styles.link}`} to={props.to} onClick={props.onClick}>{props.children}</Link>

const AboutPage = () =>
    <div className={styles.contentWrapper}>
        <img src={crowsSketch} className='image'/>
        <h1 className='heading'>About</h1>
        <p className={styles.text}>
            Derek Shoemaker is a web developer living in Chicago.
            He is experienced with numerous languages and technologies,  
            including Javascript, React, NodeJS, Python, 
            HTML, CSS, Photoshop, and Git/Github.
        </p>
        <p className={styles.text}>
            Derek performs 
            at <a
                className={styles.link}
                target='_blank'
                href='https://www.ioimprov.com'
            >iO Theatre</a> and <a
                className={styles.link}
                target='_blank'
                href='https://www.cictheater.com'
            >CIC Theater</a>.
        </p>
        <StyledLink to='/projects'>See project samples</StyledLink>
    </div>

export default AboutPage 
