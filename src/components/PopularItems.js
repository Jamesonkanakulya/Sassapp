
import React, { useContext } from 'react'
import { LabettieContext } from './Context'



function PopularItems(props) {


 
    const PopularProducts = props. PopularProducts
    const show =props.show

    if (!PopularProducts) {
        return <div>
            <h2> Loading.....</h2>
        </div>
    }



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
                                    <img src={item.images[0]} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p> $ {item.price}</p>
                                    <div className="popularButton">
                                        <button>add to chat</button>
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
