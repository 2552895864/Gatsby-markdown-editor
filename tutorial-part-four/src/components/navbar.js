import React from 'react'
import Nav from './nav';

export default ({style})=>(
    <div style={style}>
        <Nav to="/page-2/">
            <span>page 2</span>
        </Nav>
        <Nav to="/demo/">
            <span>demo</span>
        </Nav>
        <Nav to="/gitbook/">
            <span>gitbook</span>
        </Nav>
    </div>
)