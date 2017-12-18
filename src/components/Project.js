import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Project.module.css'

class Project extends Component {
    constructor (props) {
        super(props)
        this.toggleDescription = this.toggleDescription.bind(this)
        this.showDescription = this.showDescription.bind(this)
        this.hideDescription = this.hideDescription.bind(this)
        this.defaultState = {
            isShowingDescription: false,
            displayLinkStyle: {
                display: 'none',
            },
        }
        this.state = this.defaultState
    }

    toggleDescription () {
        this.setState(prevState => {
            // this setTimeout makes the link display slightly behind the
            // rest of the description so the user won't accidentally
            // be routed to the project without seeing the description
            // first
            window.setTimeout(() => {
                const display = !prevState.isShowingDescription ? 'none' : 'inline'
                this.setState({displayLinkStyle: {display: display}})
            }, 300)
            return {
                isShowingDescription: !prevState.isShowingDescription,
            }
        })
    }

    showDescription () {
        this.setState(prevState => {
            window.setTimeout(() => {
                this.setState({displayLinkStyle: {display: 'inline'}})
            }, 300)
            return {
                isShowingDescription: true,
            }
        })
    }

    hideDescription () {
        this.setState({
            displayLinkStyle: {display: 'none'},
            isShowingDescription: false,
        })
    }

    render () {
        const { screenshot, title, description, link, code } = this.props.info
        const screenshotBackground = {
            background: `url(${screenshot})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }
        return (
            <div
                className={styles.wrapper}
                onTouchEnd={this.toggleDescription}
                onMouseEnter={this.showDescription}
                onMouseLeave={this.hideDescription}
            >
                <div
                    className={this.state.isShowingDescription ? `${styles.screenshot} ${styles.filtered}` : styles.screenshot}
                    style={screenshotBackground}
                ></div>
                <div className={this.state.isShowingDescription ? `${styles.info} ${styles.visible}` : `${styles.info} ${styles.hidden}`}>
                    <div className={styles.infoContent}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <a
                            className={styles.link}
                            style={this.state.displayLinkStyle}
                            href={link}
                            target='__blank'
                        >
                            see project
                        </a>
                        <a
                            className={styles.link}
                            style={this.state.displayLinkStyle}
                            href={code}
                            target='__blank'
                        >
                            see source code
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project


