import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Menu.module.css'

const visibleStyle = `${styles.wrapper} ${styles.visible}`
const hiddenStyle = `${styles.wrapper} ${styles.hidden}`

const StyledLink = props =>
    <Link className={styles.link} to={props.to}>{props.children}</Link>

const Menu = props =>
    <div className={props.isMenuOpen ? visibleStyle : hiddenStyle}>
        <div className={styles.closeButton} onClick={props.toggleMenu}>&times;</div>
        <div className={styles.linksWrapper}>
            <StyledLink to='/' >Home</StyledLink>
            <StyledLink to='/about' >About</StyledLink>
            <StyledLink to='/work' >Work</StyledLink>
            <StyledLink to='/contact' >Contact</StyledLink>
        </div>
    </div>

export default Menu
