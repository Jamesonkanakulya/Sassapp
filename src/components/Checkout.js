import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Checkout() {

    const [user,setUser] = useState({

        name:'',
        password:''
        
    })

    const [coupon,setCoupon] = useState('')
    const handleCoupon = e =>{
        e.preventDefault()
        setCoupon(e.target.value)


    }

    
    const handleUser = e =>{
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
       
    }


    return (
       <div className="container">

<div className="checkout">

<div className="first">
    <span>Returning Customer? </span>
    <span> <Link to="#">Click here to login</Link> </span>

    


</div>

<div className="second">
<input type="text" placeholder="Username or Email * "
    name="name" 
    onChange={handleUser}
    value={user.name} />
    <input type="text" placeholder="Password * "
    onChange={handleUser}
    name="password"
    value={user.password} />
   <input type="checkbox" name="remember" value="" /> <span>Remeber me</span>


    <button> LOG IN </button>
    <Link to="#">Forgotten password?</Link> 


    
</div>

<div className="first">
    <span>Have a coupon? </span>
    <span> <Link to="#">Click here to enter your code</Link> </span>
</div>


<div className="coupon">

<input type="text" name="coupon"

placeholder="Enter coupon code"
value={coupon} onChange={handleCoupon}/>

<button> Apply coupon code </button>

      
      
</div>







</div>




           
       </div>
    )
}

export default Checkout
