import React from 'react'
import Link from 'gatsby-link'
import sunglasses from '../images/sunglasses.jpg'

const styles = {
    link: {
        padding: '.5em',
        paddingTop: 0,
    },
    image: {
        width: '100%',
        maxHeight: '500px'
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    }
}

const Contact = () =>
    <div>
        <h1>Contact</h1>
        <div style={styles.div}>
            <a style={styles.link} target='_blank' href='https://github.com/shoemakerdr'>Github</a>
            <a style={styles.link} target='_blank' href='https://www.linkedin.com/in/derek-shoemaker-487b92103/'>LinkedIn</a>
        </div>
        <div>
            <img style={styles.image} src={sunglasses} alt='sunglasses' />
        </div>
    </div>

export default Contact 
