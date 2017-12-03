import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/layout/index.module.css'
import './index.css'

class TemplateWrapper extends Component { 
    constructor (props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.children = props.children
        this.state = {
            isMenuOpen: false,
        }
    }

    toggleMenu () {
        this.setState(prevState => {
            console.log(!prevState.isMenuOpen)
            return {
                isMenuOpen: !prevState.isMenuOpen
            }
        })
    }

    render () {
        return (
            <div className={styles.wrapper}>
                <Helmet
                    title="Derek Shoemaker | Portfolio"
                    meta={[
                    { name: 'description', content: 'Development Portfolio of Derek Shoemaker' },
                    { name: 'keywords', content: 'web developer, web development, front end, full stack, react, javascript, freelance' },
                    ]}
                />
                <Menu isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />
                <Header isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu}/>
                <div>
                    {this.children()}
                </div>
            </div>
        )
    }
}
  
export default TemplateWrapper
