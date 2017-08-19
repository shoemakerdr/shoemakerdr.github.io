import React from 'react'
import Link from 'gatsby-link'
import Project from './Project'

const rand = {
    name: 'Random Quote Generator',
    description: 'This is a page describing my Random Quote Generator project',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

const RandomQuote = () =>
    <Project
        name={rand.name} 
        description={rand.description} 
        screenshot={rand.screenshot} 
    />
export default RandomQuote  
