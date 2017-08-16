import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link
            style={{ textDecoration: 'none'}}
            to={props.to}>
            {props.children}
        </Link>
    </li>

const Header = () =>
  <div
    style={{
      backgroundColor: '#FF99DD',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
            margin: 0,
            selection: 'none',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Derek Shoemaker >> front end developer
      </h1>
      <ul style={{listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/writing/">Writing</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Development Portfolio of Derek Shoemaker' },
        { name: 'keywords', content: 'web developer, web development, front end, full stack, react, javascript, freelance' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
