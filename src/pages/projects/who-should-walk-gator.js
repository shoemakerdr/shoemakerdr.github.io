import React from 'react'
import Project from './Project'

const data = {
    title: 'Who Should Walk Gator?',
    link: 'https://who-should-walk-gator.herokuapp.com',
    technologies: 'Python, Flask, Google Sheets (as my database layer)',
    description: 'This is a page describing my Who Should Walk Gator? project',
    source: 'https://github.com/shoemakerdr/who-should-walk-gator',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

