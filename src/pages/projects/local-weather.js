import React from 'react'
import Project from './Project'

const data = {
    title: 'Local Weather App',
    link: 'https://shoemakerdr.github.io/LocalWeatherApp',
    technologies: 'Javascript, HTML, CSS',
    description: 'This is a page describing my Local Weather App project',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project
        title={data.title} 
        link={data.link}
        technologies={data.technologies}
        description={data.description} 
        screenshot={data.screenshot} 
    />
