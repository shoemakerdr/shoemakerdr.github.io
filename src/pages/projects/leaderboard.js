import React from 'react'
import Project from './Project'

const data = {
    title: 'FreeCodeCamp Camper Leaderboard',
    link: 'https://shoemakerdr.github.io/fcc-leaderboard',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This project is a leaderboard for the top 100 campers \
    (students) on FreeCodeCamp, which can be sorted based on points from the \
    last 30 days and all time.',
    source: 'https://github.com/shoemakerdr/fcc-leaderboard',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

