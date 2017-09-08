import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/pomodoro.jpeg'

const todoURL = 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs'

const todo = () =>
    <a href='https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs' target='_blank'>TodoMVC</a>

const data = {
    title: 'Pomodoro Timer',
    link: 'https://shoemakerdr.github.io/Pomodoro',
    technologies: 'Javascript, HTML, CSS',
    description: `This project was my second try at writing an application \
    using MVC architecture. This time, I studied the architecture from the \
    TodoMVC project. This taught me not only about a more proper \
    implementation of MVC, but also introduced me to dependency injection, \
    which I would use on many projects going forward.`,
    additionalLinks: [
        {
            href: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs',
            text: 'TodoMVC'
        }
    ],
    source: 'https://github.com/shoemakerdr/Pomodoro',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

