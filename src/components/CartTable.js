import React from 'react'
import useCount from '.././Hook/useCount'
import CartTotal from './CartTotal'

function CartTable(props) {

    const [count, incrementCount, decreamentCount] = useCount(0)
    return (
        <div className="cartItems">

            <table border="1" cellspacing="20">
                <tr>
                    <th rowSpan="2" width="30" height="20" >{count}</th>
                    <th width="20" onClick={incrementCount}>+</th>

                </tr>

                <tr>
                    <th width="20" onClick={decreamentCount}>-</th>

                </tr>
               



            </table>

            <CartTotal count={count}  price={props.price} />

        </div>
    )
}

export default React.memo(CartTable)
