import React from 'react'
import Project from './Project'

const data = {
    title: 'Local Weather App',
    link: 'https://shoemakerdr.github.io/LocalWeatherApp',
    technologies: 'Javascript, HTML, CSS',
    description: 'This is a project that gets your location based on your IP \
    address, and uses that information to make a call to the OpenWeather API. \
    It displays your local temperature, which can be toggled for degress in \
    celsius and fahrenheit, and a small icon representing the current weather.',
    source: 'https://github.com/shoemakerdr/LocalWeatherApp',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

