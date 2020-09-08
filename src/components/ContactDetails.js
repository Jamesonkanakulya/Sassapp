import React from 'react'
import {FiPhone,FiMapPin,FiMail } from "react-icons/fi"


import { Link } from 'react-router-dom';

function ContactDetails() {
    return (
        <div  >
            <h4>contacts</h4>
            <ul>
                <li><Link><FiMapPin /> &nbsp; &nbsp; Dubai Alrigga</Link> </li>
                <li><Link><FiPhone /> &nbsp; &nbsp; +971561598659 </Link></li>
                <li><Link><FiMail /> &nbsp; &nbsp;birabettie0@gmail.com</Link></li>
            </ul>
        </div>
    )
}

export default ContactDetails
