import React from 'react'
import Link from 'gatsby-link'

const styles = {
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
}
const projects = [
    {name: 'Random Quote Generator', route: 'random-quote'},
    {name: 'Local Weather', route: 'local-weather'},
    {name: 'Wikipedia Searcher', route: 'wikiviewer'},
    {name: 'Twitch TV Channel App', route: 'twitch-tv'},
    {name: 'Calculator', route: 'calculator'},
    {name: 'Pomodoro Timer', route: 'pomodoro'},
    {name: 'Tic Tac Toe', route: 'tictactoe'},
    {name: 'Simon', route: 'simon'},
    {name: 'Markdown Previewer', route: 'markdown-previewer'},
    {name: 'FreeCodeCamp Leaderboard', route: 'leaderboard'},
    {name: 'Who Should Walk Gator?', route: 'who-should-walk-gator'}
]

const ProjectIndex = () =>
  <div style={styles.flex}>
    <h1>Projects</h1>
    {projects.map(project => <Link to={`/projects/${project.route}`}>{project.name}</Link>)}
  </div>

export default ProjectIndex
