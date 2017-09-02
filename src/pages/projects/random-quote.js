import React from 'react'
import Project from './Project'

const data = {
    title: 'Random Quote Generator',
    link: 'https://shoemakerdr.github.io/RandomQuoteProject',
    technologies: 'Javascript, HTML, CSS',
    description: 'This is a page describing my Random Quote Generator project',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

