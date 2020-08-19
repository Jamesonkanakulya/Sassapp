import React, { useEffect, useState, useContext } from 'react'
import { LabettieContext } from '../components/Context'
import MySlider from '../components/MySlider'
import useCount from '../Hook/useCount'
import Services from '../components/Services'
import Subscribe from '../components/Subscribe'
import { Background } from '../components/StyledComponent'
import TitleTwo from '../components/TitleTwo'

function SingleProduct(props) {
    const [slug, setSlug] = useState(props.match.params.slug)
    const [myproduct, setMyProduct] = useState([])
    const products = useContext(LabettieContext)
    const AltListProducts = products.products
    const [count, increamentCount, decreamentCount] = useCount(0)

    useEffect(() => {
        let tempProduct = AltListProducts.find(item => slug === item.slug)
        return setMyProduct(tempProduct)
    }, [products, slug,])
    if (!myproduct) {
        return <div>
            Loading .......
        </div>
    }
    return (
        <>

            <Background opacity=".5" height="25rem" />
            <TitleTwo title={slug} />/


            <div className="container">

                <div className="singleProduct">
                    <MySlider>
                        {!myproduct.images ? null :
                            myproduct.images.map((image, i) => {
                                return <img key={i} src={image} alt="sucess" />
                            })
                        }
                    </MySlider>
                    <h2>{myproduct.title}</h2>
                    <h5>{myproduct.category}</h5>


                    <p>{myproduct.description}</p>

                    <div className="counter">
                        <span><strong>Quantity</strong></span>
                        <div className="mycount">
                            <span onClick={decreamentCount}>
                                -
        </span>
                            <span style={{ background: "steelblue" }}>
                                {count}
                            </span>
                            <span onClick={increamentCount}>
                                +
        </span>

                        </div>
                    </div>
                    <h6 ><strong>Price</strong>: $<span style={{ color: "red" }}>{myproduct.price}</span> </h6>
                    <button> add to chat</button>
                </div>

            </div>
            <Subscribe />

        </>
    )
}

export default SingleProduct
