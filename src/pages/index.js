import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Welcome</h1>
    <div>
        <div>
            <h3>My name is Derek.</h3>
            <Link to='/projects' >You can click here to check out some projects I've built.</Link>
        </div>
    </div>
  </div>
export default IndexPage
