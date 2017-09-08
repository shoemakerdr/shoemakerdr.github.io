import React from 'react'
import Link from 'gatsby-link'
import cherub from '../images/cherub.jpg'

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    image: {
        position: 'relative',
        maxWidth: '900px',
        maxHeight: '500px'
    },
    paraDiv: {
        width: '50%',
        paddingRight: '2.5em',
        paddingTop: '9.5em'
    },
    text: {
        paddingTop: '3em'
    }
}

const WritingIndex = () =>
    <div>
        <h1>Writing</h1>
        <div style={styles.div} >
            <div style={styles.paraDiv}>
                <p>Nothing here yet.</p>
                <p style={styles.text}>Nothing except this weird picture taken out of context...</p>
            </div>
            <img style={styles.image} src={cherub} alt='cherub' />
        </div>
    </div>

export default WritingIndex 
