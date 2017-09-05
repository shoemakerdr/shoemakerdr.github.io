import React from 'react'
import Project from './Project'

const data = {
    title: 'Markdown Previewer',
    link: 'https://shoemakerdr.github.io/markdown-previewer',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This is a simple Markdown previewer app that uses the react-\
    markdown module to render Github-flavored markdown text as React \
    components.',
    source: 'https://github.com/shoemakerdr/markdown-previewer',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

