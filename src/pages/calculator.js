import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/calculator.jpeg'

const data = {
    title: 'Calculator',
    link: 'https://shoemakerdr.github.io/Calculator',
    technologies: 'Javascript, HTML, CSS',
    description: 'I had two goals when writing this calculator project: 1. To \
    use it as an opportunity to understand the MVC architecture, 2. To build a \
    calculator that operates like a real handheld calculator, which includes \
    keep track of the state of the current calculation. I read many articles \
    about MVC, and this project was my first attempt. Looking back, I now have \
    a much better understanding of what MVC is and what it\'s used for.',
    source: 'https://github.com/shoemakerdr/Calculator',
    screenshot:screenshot
}

export default () =>
    <Project {...data} />

