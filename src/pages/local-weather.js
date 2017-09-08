import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/localweather.jpeg'

const data = {
    title: 'Local Weather App',
    link: 'https://shoemakerdr.github.io/LocalWeatherApp',
    technologies: 'Javascript, HTML, CSS',
    description: 'This is a project that gets your location based on your IP \
    address, and uses that information to make a call to the OpenWeather API. \
    It displays your local temperature, which can be toggled for degress in \
    celsius and fahrenheit, and a small icon representing the current weather.',
    source: 'https://github.com/shoemakerdr/LocalWeatherApp',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />

