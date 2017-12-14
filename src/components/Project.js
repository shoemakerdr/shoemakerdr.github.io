import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Project.module.css'

class Project extends Component {
    constructor (props) {
        super(props)
        this.toggleDescription = this.toggleDescription.bind(this)
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
            if (!prevState.isShowingDescription) {
                // this setTimeout makes the link display slightly behind the
                // rest of the description so the user won't accidentally
                // be routed to the project without seeing the description
                // first
                window.setTimeout(() => {
                    this.setState({displayLinkStyle: {display: 'inline'}})
                }, 0)
            }
            else this.setState({displayLinkStyle: {display: 'none'}})

            return {
                isShowingDescription: !prevState.isShowingDescription,
            }
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
                onMouseEnter={this.toggleDescription}
                onMouseLeave={this.toggleDescription}
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


