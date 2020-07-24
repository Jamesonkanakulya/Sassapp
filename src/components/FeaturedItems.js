import React, { useContext } from 'react'
import { LabettieContext } from './Context'


function FeaturedItems() {

    const tempProducts = useContext(LabettieContext)
    const featuredProducts = tempProducts.products.filter(item => item.featured === true)

    if (!featuredProducts) {
        return <div>
            <h2> Loading.....</h2>
        </div>
    }
  



    return (
        <div className="featuredItems">
            <h2>Featured Products</h2>
            <div className="row">
            {
                featuredProducts.map((item, i) => {
                    return <section key={i} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <img src={item.images[0]} alt={item.title} />
                        <h3>{item.title}</h3>
                <p> $ {item.price}</p>
                    </section>
                })
            }

                
            </div>

        </div>
    )
}

export default React.memo(FeaturedItems)
