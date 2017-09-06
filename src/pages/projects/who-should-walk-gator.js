import React from 'react'
import Project from './Project'

const data = {
    title: 'Who Should Walk Gator?',
    link: 'https://who-should-walk-gator.herokuapp.com',
    technologies: 'Python, Flask, Google Sheets',
    description: 'This app was my first "full stack" application I wrote. I got the idea \
    after many days of my partner and I not remembering who is supposed to walk our dog, Gator. \
    Since I had been using with Python at work, I decided to write it using the Flask framework. \
    I also decided to use Google Sheets as my database layer because it makes it extremely easy for \
    my partner, who doesn\'t know how to program, to change the schedule whenever she needs without \
    having to go through a complex database layer. This was also my first time deploying an app to \
    Heroku.',
    source: 'https://github.com/shoemakerdr/who-should-walk-gator',
    screenshot: 'https://previews.123rf.com/images/stocking/stocking1211/stocking121100600/16599295-Portrait-of-a-thoughtful-man-having-doubts-Stock-Photo-confused-advice-man.jpg'
}

export default () =>
    <Project {...data} />

