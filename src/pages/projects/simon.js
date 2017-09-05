import React from 'react'
import Project from './Project'

const data = {
    title: 'Simon',
    link: 'https://shoemakerdr.github.io/simon-react',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This was the first project I built with React. I fell in love with the component-based \
    design model. One of the challenges to this project was to make sure to debounce the setTimeout calls, so the \
    game could continue to function if the user pressed buttons too quickly or during the move setup phase.',
    source: 'https://github.com/shoemakerdr/simon-react',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

