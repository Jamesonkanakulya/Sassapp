import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {

    const footerItems = [


        {
            title: "Quick Links",
            content: [
                <Link to="/about">About </Link>,
                <Link to="#">Offers and Discounts </Link>,
                <Link to="#">Get Coupon</Link>,
                <Link to="/contact">Contact Us </Link>,

            ]

        },
        {
            title: "Product Categories",
            content: [<Link to="#">Bags </Link>,
            <Link to="#">Necklaces</Link>,
            <Link to="#">Baby Shoes</Link>,
            <Link to="#">Others</Link>,]


        },
        {
            title: "Support",
            content: [
                <Link to="#"> Frequently Asked Questions</Link>,
                <Link to="#">Terms & Conditions</Link>,
                <Link to="#">Privacy Policy</Link>,
                <Link to="#">Report a Payment Issue</Link>,
            ]

        }
    ]




    return (


        <div className="container" >
            <div className="footerContainer">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Title />
                        <p>We are designers of all beadwork products.
                            We VAlue our customers and we put theirs needs firs</p>


                    </div>
                    {
                        footerItems.map((item, i) => {
                            return <div key={i} className="col-lg-3 col-md-4 col-sm-12">
                                <h4>{item.title}</h4>
                                {
                                    item.content.map((links, i) => {
                                        return <ul key={i}>
                                            <li>{links}</li>
                                        </ul>
                                    })
                                }
                            </div>
                        })
                    }

                </div>






            </div>
            <div className="secondList">
                <p>All Rights Reserved. © 2020 La Bettie Designz Design By : Jameson kanakulya</p>

                <ul >

                    <li><Link to="#"><FaTwitter /></Link></li>
                    <li><Link to="#"><FaFacebook /></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>

                </ul>

            </div>





        </div>
    )
}

export default Footer
