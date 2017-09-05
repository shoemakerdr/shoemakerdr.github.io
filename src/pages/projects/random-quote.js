import React from 'react'
import Project from './Project'

const data = {
    title: 'Random Quote Generator',
    link: 'https://shoemakerdr.github.io/RandomQuoteProject',
    technologies: 'Javascript, HTML, CSS',
    description: 'This was the first project I ever built with Javascript. I have refactored it to use the Fetch API \
    instead of the XMLHttpRequest object. I am currently studying C socket programming and databases, so my goal \
    it to write an API for getting random quotes in C, and call that API with this project.',
    source: 'https://github.com/shoemakerdr/RandomQuoteProject',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

