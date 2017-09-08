import React from 'react'
import Link from 'gatsby-link'
import derekbear from '../derekbear.jpg'

const styles = {
    derek: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        paddingLeft: '1em'
    }
}

const IndexPage = () =>
  <div>
    <h1>Welcome</h1>
    <div style={styles.derek}>
        <img src={derekbear} alt='Derek Bear' />
        <div style={styles.text}>
            <h3>My name is Derek.</h3>
            <p>Sometimes, I gaze away longingly while holding a giant teddy bear. Other times, I make websites.</p>
            <p>Feel free to look around my portfolio.</p>
            <Link to="/projects/">You can click here to check out some projects I've built.</Link>
        </div>
    </div>
  </div>

export default IndexPage
