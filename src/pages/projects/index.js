import React from 'react'
import Link from 'gatsby-link'
import withBlockDisplay from '../withBlockDisplay'

const BlockLink = withBlockDisplay(Link)

const ProjectIndex = () =>
  <div>
    <h1>Projects</h1>
    <BlockLink to="/projects/random-quote">Random Quote Generator</BlockLink>
    <BlockLink to="/projects/local-weather">Local Weather</BlockLink>
    <BlockLink to="/projects/wikiviewer">Wikipedia Searcher</BlockLink>
    <BlockLink to="/projects/twitch-tv">Twitch TV Channel App</BlockLink>
    <BlockLink to="/projects/calculator">Calculator</BlockLink>
    <BlockLink to="/projects/pomodoro">Pomodoro Timer</BlockLink>
    <BlockLink to="/projects/tictactoe">Tic Tac Toe</BlockLink>
    <BlockLink to="/projects/simon">Simon</BlockLink>
    <BlockLink to="/projects/markdown-previewer">Markdown Previewer</BlockLink>
    <BlockLink to="/projects/leaderboard">FreeCodeCamp Leaderboard</BlockLink>
  </div>

export default ProjectIndex
