import React, { useContext, useState } from 'react'
import { LabettieContext } from './Context'
import CartTable from './CartTable'
import Drops from './Drops'
import { Button } from './StyledComponent'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai"
import { FiCircle } from "react-icons/fi";


function Chart() {

    const items = useContext(LabettieContext)
    const chartItems = items.chartItems
    const [zipcode, setZip] = useState('')

    
    const displayItems = () =>{
        if(chartItems.length===0){
            return <div>
                You have not selected any items
            </div>
        }


        chartItems.map(item => {
            return <div className="cartItems" key={item.id}>
                <div >
                    <img src={item.images[0]} alt={item.title}/>
                    <h6  >{item.title}</h6>
                    <p  >{item.price}</p>
                </div>
                <div >
                    <CartTable price={item.price}/>
                </div>
                <div className="dropdown-divider mb-4" />

            </div>
        })
     }
   

    const handleInputChange = (event) => {

        setZip(event.target.value)

    }

    const shippingList = [

        {
            title: "Flat Rate: $5.00"
        },
        {
            title: "Free Shipping "
        },
        {
            title: "Flat Rate: $10.00 "
        },
        {
            title: "Local Delivery: $2.00"
        }
    ]


    return (
        <div className="container  ">

            <div  >

                <div className="cart">
                    <ul>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                    <div className="dropdown-divider mb-4" />
                </div>

                {
                     displayItems
                }

                <div className="cartCheckOut">
                    <ul>
                        <li><Link to="#"><Button hoverColor="white" >Update Cart</Button></Link></li>
                        <li><Link  to="#"><Button hoverColor="white" >Close Coupon</Button></Link></li>
                    </ul>
                    <div className="dropdown-divider mb-4" />

                </div>

                <div className="cartSubTotal">
                    <h6>subtotal</h6>
                    <h4>$ 2000</h4>
                </div>

                <div className="dropdown-divider mb-4" />
                <div className="shipping">
                    <p>Shipping</p>
                    {shippingList.map((item, i) => {
                        return <ul key={i}>
                            <li>{item.title} <FiCircle /> </li>

                        </ul>
                    })}
                    <span> Calculate shipping <AiFillCaretDown /></span>

                    <div className="cartInput">
                        <div className="form-row">
                            <div className="form-group col-md-6">

                                <select className="form-control" name="city" onChange={handleInputChange}>
                                    <option selected>Country</option>
                                    <option value="1">city 1</option>
                                    <option value="2">city 2</option>
                                    <option value="3">city 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">

                                <select className="form-control" name="city" onChange={handleInputChange}>
                                    <option selected>Select option State</option>
                                    <option value="1">state </option>
                                    <option value="2">state 2</option>
                                    <option value="3">state 3</option>
                                </select>
                            </div>
                        </div>
                        <input type="text" name="zipcode"
                            value={zipcode} onchange={handleInputChange}
                            placeholder="postalcode/zipcode"
                        />

                    </div>

                    <Button className="buttonOne" >update details</Button>
                    <div className="dropdown-divider mb-4" />

                   <div className="buttonTwo">
                   <Button style={{ padding: "1rem 2rem" }}>
                        continue shopping</Button>
                    <Button style={{
                      
                     padding: "1rem 2rem"
                    }}>
                        Proceed to checkout</Button>
                       
                   </div>


                </div>
                <Drops/>












            </div>





            {/* <table style={{ width: "5rem" }} border="1" cellspacing="20">

                <tr>
                    <th style={{ background: "red", borderTop: "none" , width:"5rem"}} colspan="6"> Time Table </th>
                </tr>

                <tr>
                    <td rowspan="6"> Hours </td>
                    <th width="5000"> mon </th>
                    <th> tues </th>
                    <th> Wed </th>
                    <th> Thrus</th>
                    <th> Fri </th>
                </tr>

                <tr>
                    <td> Science </td>
                    <td> Maths</td>
                    <td> Science</td>
                    <td> Maths </td>
                    <td> Arts</td>
                </tr>

                <tr>
                    <td> Science </td>
                    <td> Maths</td>
                    <td> Science</td>
                    <td> Maths </td>
                    <td> Arts</td>
                </tr>

                <tr>
                    <th colspan="5"> Lunch </th>
                </tr>

                <tr>
                    <td> Science </td>
                    <td> Maths</td>
                    <td> Science</td>
                    <td> Maths </td>
                    <td rowspan="2"> Project </td>
                </tr>

                <tr>
                    <td > Science </td>
                    <td> Maths</td>
                    <td> Science</td>
                    <td> Maths </td>
                </tr>
            </table> */}

        </div >
    )
}

export default React.memo(Chart)
