import React from 'react'
import {Link} from 'gatsby';

export default ({to,children})=>(
    <Link to={to} style={{
        color: 'white',
        textDecoration: 'none',
        padding: '0 1rem'
    }}>
        {children}
    </Link>
)