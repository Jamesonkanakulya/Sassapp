import React from 'react'
import { FiBox, FiRefreshCcw } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";

function Services() {

    const myservices = [
        {
            icon: <FiBox />,
            title: "freeshiping",
            content: "We provide free shipping for people within th middle east and Europe"
        },
        {
            icon: <FiRefreshCcw />,
            title: "Customer Relationships",
            content: "We VAlue our customers and we put theirs needs firs"
        },
        {
            icon: <FaShieldAlt />,
            title: "secure payment system",
            content: "We VAlue our customers and we put theirs needs firs"
        }


    ]
    return (
        <div className="container">
        <div className="services">
        {
                myservices.map((item, i) => {
                    return <div key={i} className="row">
                        <section className="col-lg-4 col-md-6 col-sm-12">
                        <span>{item.icon}</span>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                            
                        </section>
                       

                    </div>
                })
            }
            
        </div>



        </div>
    )
}

export default Services
