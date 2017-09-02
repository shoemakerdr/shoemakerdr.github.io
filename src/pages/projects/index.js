import React from 'react'
import Link from 'gatsby-link'

const styles = {
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
}

const ProjectIndex = () =>
  <div style={styles.flex}>
    <h1>Projects</h1>
    <Link to="/projects/random-quote">Random Quote Generator</Link>
    <Link to="/projects/local-weather">Local Weather</Link>
    <Link to="/projects/wikiviewer">Wikipedia Searcher</Link>
    <Link to="/projects/twitch-tv">Twitch TV Channel App</Link>
    <Link to="/projects/calculator">Calculator</Link>
    <Link to="/projects/pomodoro">Pomodoro Timer</Link>
    <Link to="/projects/tictactoe">Tic Tac Toe</Link>
    <Link to="/projects/simon">Simon</Link>
    <Link to="/projects/markdown-previewer">Markdown Previewer</Link>
    <Link to="/projects/leaderboard">FreeCodeCamp Leaderboard</Link>
  </div>

export default ProjectIndex
