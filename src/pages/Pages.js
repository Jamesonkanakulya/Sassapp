import React from 'react'
import { Link } from 'react-router-dom'

function Pages() {
    return (
        <div>
            
            hello pages
            <ul>
                <li> <Link to= "login/">Login</Link> </li>
                <li> <Link to= "chart/">Chart</Link> </li>
                <li> <Link to= "checkout/">Checkout</Link> </li>
                
            </ul>
        </div>
    )
}

export default Pages
