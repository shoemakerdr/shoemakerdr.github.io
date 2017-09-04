import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const styles = {
    title: {
        textDecoration: 'none',
        color: 'white'
    }
}

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
        <Link style={styles.title} to="/">Derek Shoemaker -> Web Developer</Link>
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

const Footer = () =>
    <div
        style={{
            bottom: 0,
            width: '100%',
            marginTop: '2em',
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: '.25em'
        }}
    >
        <p style={{marginBottom:0, marginTop: '2em', paddingBottom: '.25em'}}>Copyright 2017 by Derek Shoemaker | Made with <a href='https://facebook.github.io/react' target='_blank'>React</a> and <a href='https://gatsbyjs.org' target='_blank'>GatsbyJS</a></p>
    </div>

const TemplateWrapper = ({ children }) =>
  <div style={{height: '100%'}}>
    <Helmet
      title="Derek Shoemaker | Portfolio"
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
    <Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
