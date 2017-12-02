import React from 'react'
import Link from 'gatsby-link'
import readingSketch from '../images/readingSketch.jpg'
import styles from '../styles/pages/index.module.css'

const IndexPage = () =>
  <div>
    <div>
        <div>
            <h2 className={styles.story}>Does your website tell a story?</h2>
            <img className={styles.image} src={readingSketch} title='fairy tale' />
            <h1 className={styles.name}>Derek Shoemaker</h1>
            <h3 className={styles.developer}>web developer</h3>
            <div className={styles.icons}>
                <a href='https://github.com/shoemakerdr' className={styles.socialIcon}><i className='fa fa-github'></i></a>
                <a href='https://twitter.com/derekrshoe' className={styles.socialIcon}><i className='fa fa-twitter'></i></a>
                <a href='https://www.linkedin.com/in/derek-shoemaker-487b92103/' className={styles.socialIcon}><i className='fa fa-linkedin'></i></a>
            </div>
        </div>
    </div>
  </div>
export default IndexPage
