import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/simon.jpeg'

const data = {
    title: 'Simon',
    link: 'https://shoemakerdr.github.io/simon-react',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This was the first project I built with React. I fell in love with the component-based \
    design model. One of the challenges to this project was to make sure to debounce the setTimeout calls, so the \
    game could continue to function if the user pressed buttons too quickly or during the move setup phase.',
    source: 'https://github.com/shoemakerdr/simon-react',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

