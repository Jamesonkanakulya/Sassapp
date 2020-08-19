
import React, { useContext,useState,useEffect } from 'react'
import { LabettieContext } from './Context'

function PopularItems(props) {
     const PopularProducts = props. PopularProducts
    const show =props.show
    const  mycontext = useContext(LabettieContext)
    const  handleChart = mycontext.handleChart
        
    if (!PopularProducts) {
        return <div>
            <h2> Loading.....</h2>
        </div>
    }

    // useEffect(() => {
    //     handleChart
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    return (
        <>
            <div style={{ marginTop: "9rem" }} className="container  ">
                <div className="row">
                    <div className="popularItems" >
                        <div className="popular-header">
                            {props.children}
                        </div>
                        {
                            PopularProducts.map((item, i) => {
                                return <section key={i} className="col-lg-4 col-md-6 col-sm-12">
                                    <img src={item.images[0]} alt={item.title}/>
                                    <h3>{item.title}</h3>
                                    <p> $ {item.price}</p>
                                    <div className="popularButton">
                                        <button onClick={()=> handleChart(item.title)} >add to chat</button>
                                    </div>

                                </section>
                            })
                        }

                        <button className={show?"showButton":"hideButton"}  > view more products</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default React.memo(PopularItems)
