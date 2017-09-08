import React from 'react'
import Link from 'gatsby-link'

const styles = {
    image: {
        margin: 0,
        width: '50%',
        height: '50%',
        cursor: 'pointer',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },
    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        margin:0,
        paddingTop: '.25em',
        paddingRight: '.5em'
    },
    link: {
        marginTop: '1em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    additional: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '.5em'
    }
}

export default props =>
    <div>
        <a href={props.link} target='_blank'><h1>{props.title}</h1></a>
        <div style={styles.flex}>
            <div style={styles.info}>
                <h3>Technologies used: {props.technologies}</h3>
                <p>{props.description}</p>
                {props.additionalLinks && <div style={styles.additional}>{props.additionalLinks.map(link => <a href={link.href} target='_blank'>{link.text}</a>)}</div>}
                <a href={props.source} target='_blank'>Source code on Github</a>
            </div>
            <img onClick={() => window.open(props.link, '_blank')} style={styles.image} src={props.screenshot} />
        </div>
        <div style={styles.link}>
            <Link to="/projects/" >Back to projects</Link>
        </div>
    </div>

