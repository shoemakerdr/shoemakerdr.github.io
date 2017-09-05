import React from 'react'
import Project from './Project'

const todoURL = 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs'

const todo = () =>
    <a 
        href={todoURL}
        target='_blank'
    >
    TodoMVC
    </a>

const data = {
    title: 'Pomodoro Timer',
    link: 'https://shoemakerdr.github.io/Pomodoro',
    technologies: 'Javascript, HTML, CSS',
    description: `This project was my second try at writing an application \
    using MVC architecture. This time, I studied the architecture from the \
    ${todo()} project. This taught me not only about a more proper \
    implementation of MVC, but also introduced me to dependency injection, \
    which I would use on many projects going forward.`,
    source: 'https://github.com/shoemakerdr/Pomodoro',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

