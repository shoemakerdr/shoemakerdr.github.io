import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/layout/index.module.css'

const TemplateWrapper = ({ children }) =>
  <div className={styles.wrapper}>
    <Helmet
      title="Derek Shoemaker | Portfolio"
      meta={[
        { name: 'description', content: 'Development Portfolio of Derek Shoemaker' },
        { name: 'keywords', content: 'web developer, web development, front end, full stack, react, javascript, freelance' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>

export default TemplateWrapper
