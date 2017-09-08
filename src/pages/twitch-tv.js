import React from 'react'
import Project from '../components/Project'
import screenshot from '../images/screenshots/twitch.jpeg'

const data = {
    title: 'Twitch TV',
    link: 'https://shoemakerdr.github.io/TwitchTv',
    technologies: 'Javascript, HTML, CSS',
    description: 'This project is part of the FreeCodeCamp curriculum. One of the main challenges in building \
    this was making multiple asynchronous calls to the Twitch TV API. I decided to use native ES6 Promises to \
    solve my problem. I read many articles on the Promises spec, gaining a deep knowledge of the API. One of \
    the biggest lifesavers was the Promise.all method, which allowed me to make simultaneous asynchronous \
    requests, and to render changes to the UI when all the promises have resolved, which make the development \
    experience better and the code much easier to reason about.',
    source: 'https://github.com/shoemakerdr/TwitchTv',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />
