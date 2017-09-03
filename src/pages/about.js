import React from 'react'
import Link from 'gatsby-link'
import headshot from '../headshot.jpg'

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        position: 'relative',
        maxWidth: '900px',
        maxHeight: '500px'
    },
    para: {
        paddingLeft: '2.5em',
        paddingTop: '9.5em'
    }
}

const AboutPage = () =>
    <div>
        <h1>About</h1>
        <p>I'm a web developer in Chicago, IL. I'm available for freelance work designing and building websites and web apps.</p>
        <div style={styles.div} >
            <img style={styles.image} src={headshot} alt='headshot' />
            <p style={styles.para}>I also perform improv comedy at the <a target='_blank' href="https://www.ioimprov.com">iO Theatre</a> and <a target='_blank' href="https://www.cictheater.com">CIC Theater</a>.</p>
        </div>
    </div>

export default AboutPage 
