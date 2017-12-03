import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/components/Header.module.css'

const Header = props =>
    <div className={styles.icon}>
        <div onClick={props.toggleMenu} className={props.isMenuOpen ? styles.hidden : styles.visible}>&#9776;</div>
    </div>

export default Header
