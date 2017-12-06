import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Menu.module.css'

const visibleStyle = `${styles.wrapper} ${styles.visible}`
const hiddenStyle = `${styles.wrapper} ${styles.hidden}`

const StyledLink = props =>
    <Link className={styles.link} to={props.to} onClick={props.onClick}>{props.children}</Link>

const Menu = props =>
    <div className={props.isMenuOpen ? visibleStyle : hiddenStyle}>
        <div className={styles.closeButton} onClick={props.toggleMenu}>&times;</div>
        <div className={styles.linksWrapper}>
            <StyledLink to='/' onClick={props.toggleMenu}>Home</StyledLink>
            <StyledLink to='/about' onClick={props.toggleMenu}>About</StyledLink>
            <StyledLink to='/work' onClick={props.toggleMenu}>Work</StyledLink>
            <StyledLink to='/contact' onClick={props.toggleMenu}>Contact</StyledLink>
        </div>
    </div>

export default Menu
