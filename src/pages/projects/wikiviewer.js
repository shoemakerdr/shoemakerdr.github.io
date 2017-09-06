import React from 'react'
import Project from './Project'

const data = {
    title: 'Wikipedia Searcher',
    link: 'https://shoemakerdr.github.io/WikiViewer',
    technologies: 'Javascript, HTML, CSS',
    description: 'This early project was the first one I had to "hack" on to get it done. The \
    particular API I was using did not allow cross origin requests, so I had to get intimately \
    familiar with the CORS spec before I was able to come up with a (hacky) solution. When \
    I finally got it to work, I was elated and felt VERY accomplished.',
    source: 'https://github.com/shoemakerdr/WikiViewer',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />
