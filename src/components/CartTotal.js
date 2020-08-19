import React from 'react'

function CartTotal(props) {

    const count = props.count
    const price = props.price
    return (
        <div className="cartItems">

           <div className="row">
           <h5 className="col-md-3 col-sm-3">
                {count * price}
            </h5>
               
           </div>

        </div>
    )
}

export default React.memo(CartTotal)
