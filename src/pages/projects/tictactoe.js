import React from 'react'
import Project from './Project'
import screenshot from './screenshots/tictactoe.jpeg'

const data = {
    title: 'Tic Tac Toe',
    link: 'https://shoemakerdr.github.io/TicTacToe',
    technologies: 'Javascript, HTML, CSS',
    description: 'This was one of my most challenging projects. A mentor of mine challenged me to write this \
    application using S.O.L.I.D. Object-Oriented principles and Test-Driven Development. When my first attempt \
    didn\'t fit his standards, I had to rewrite it. Of all the projects I had completed before, I learned the most \
    BY FAR writing this Tic Tac Toe app.',
    source: 'https://github.com/shoemakerdr/TicTacToe',
    screenshot: screenshot
}

export default () =>
    <Project {...data} />
    
