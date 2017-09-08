import React from 'react'
import Project from './Project'
import screenshot from './screenshots/markdown.jpeg'

const data = {
    title: 'Markdown Previewer',
    link: 'https://shoemakerdr.github.io/markdown-previewer',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This is a simple Markdown previewer app that uses the react-\
    markdown module to render Github-flavored markdown text as React \
    components.',
    source: 'https://github.com/shoemakerdr/markdown-previewer',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

