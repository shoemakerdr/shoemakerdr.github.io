import React from 'react'
import Project from './Project'

const data = {
    title: 'FreeCodeCamp Camper Leaderboard',
    link: 'https://shoemakerdr.github.io/fcc-leaderboard',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This is a page describing my FreeCodeCamp Camper Leaderboard project',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

