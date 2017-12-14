import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Header.module.css'

const StyledLink = props =>
    <Link className={styles.link} to={props.to}>{props.children}</Link>

const Header = props =>
    <div>
        <div className={styles.icon}>
            <div onClick={props.toggleMenu} className={props.isMenuOpen ? styles.hidden : styles.visible}>&#9776;</div>
        </div>
        <div className={styles.navbar}>
            <StyledLink to='/'>home</StyledLink>
            <StyledLink to='/about'>about</StyledLink>
            <StyledLink to='/projects'>projects</StyledLink>
        </div>
    </div>

export default Header
