import React from 'react'
import Link from 'gatsby-link'

const styles = {
    image: {
        margin: 0,
        width: '50%',
        height: '50%'
    },
    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        margin:0,
        paddingTop: '.25em'
    },
    link: {
        marginTop: '1em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default props =>
    <div>
        <a href={props.link} target='_blank'><h1>{props.title}</h1></a>
        <div style={styles.flex}>
            <div style={styles.info}>
                <h3>Technologies used: {props.technologies}</h3>
                <p>{props.description}</p>
                <a href={props.source} target='_blank'>Source code on Github</a>
            </div>
            <img style={styles.image} src={props.screenshot} />
        </div>
        <div style={styles.link}>
            <Link to="/projects/" >Back to projects</Link>
        </div>
    </div>

