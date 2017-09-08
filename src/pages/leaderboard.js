import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/leaderboard.jpeg'

const data = {
    title: 'FreeCodeCamp Camper Leaderboard',
    link: 'https://shoemakerdr.github.io/fcc-leaderboard',
    technologies: 'React, Javascript, HTML, CSS',
    description: 'This project is a leaderboard for the top 100 campers \
    (students) on FreeCodeCamp, which can be sorted based on points from the \
    last 30 days and all time.',
    source: 'https://github.com/shoemakerdr/fcc-leaderboard',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

