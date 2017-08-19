import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Welcome</h1>
    <p>Use the nav links to check out my portfolio.</p>
    <Link to="/projects/">Or you can just check out my projects.</Link>
  </div>

export default IndexPage
