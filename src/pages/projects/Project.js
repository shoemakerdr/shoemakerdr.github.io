import React from 'react'
import Link from 'gatsby-link'

const styles = {
    image: {
        display: 'block'
    }
}

const Project = props =>
  <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <img style={styles.image} src={props.screenshot} width='350' height='350' />
    <Link to="/projects/">Back to projects</Link>
  </div>

export default Project 
