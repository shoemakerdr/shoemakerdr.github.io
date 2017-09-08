import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/random.jpeg'

const data = {
    title: 'Random Quote Generator',
    link: 'https://shoemakerdr.github.io/RandomQuoteProject',
    technologies: 'Javascript, HTML, CSS',
    description: 'This was the first project I ever built with Javascript. I have refactored it to use the Fetch API \
    instead of the XMLHttpRequest object. I am currently studying C socket programming and databases, so my goal \
    it to write an API for getting random quotes in C, and call that API with this project.',
    source: 'https://github.com/shoemakerdr/RandomQuoteProject',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

