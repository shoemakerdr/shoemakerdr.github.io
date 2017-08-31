import React from 'react'
import Link from 'gatsby-link'
import Project from './Project'

const rand = {
    title: 'Random Quote Generator',
    link: 'https://shoemakerdr.github.io/RandomQuoteProject',
    technologies: 'Javascript, HTML, CSS',
    description: 'This is a page describing my Random Quote Generator project',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

const RandomQuote = () =>
    <Project
        title={rand.title} 
        link={rand.link}
        technologies={rand.technologies}
        description={rand.description} 
        screenshot={rand.screenshot} 
    />
export default RandomQuote  
