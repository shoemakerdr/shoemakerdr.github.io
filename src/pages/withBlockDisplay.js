import React from 'react'

const blockStyle = {
    display: 'block'
}

const withBlockDisplay = Component => props =>
    <Component style={blockStyle} {...props} />
    
export default withBlockDisplay
