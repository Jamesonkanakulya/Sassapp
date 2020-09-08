import React, { useContext,useEffect } from 'react'
import { LabettieContext } from './Context'
import bag from '../images/bag.JPG'
import necklaceOne from '../images/necklaceOne.jpg'
import phone from '../images/phonejacket.jpg'
import shoe from '../images/shoe.jpg'
import PopularItems from './PopularItems'
import HomeVideo from './HomeVideo'
import Services from './Services'
import Aos from 'aos';
import 'aos/dist/aos.css';


function FeaturedItems() {

    const tempProducts = useContext(LabettieContext)
    const featuredProducts = tempProducts.products.filter(item => item.featured === true)
    const PopularProducts = tempProducts.products.filter(item => item.popular === true)
    useEffect(() =>{

        Aos.init({duration:2000})

    },[])

    if (!featuredProducts) {
        return <div>
            <h2> Loading.....</h2>
        </div>
    }




    return (
        <>

            <div data-aos="fade-up" className="featuredItems">
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

            <div data-aos="fade-up" className="featuredImages">




                <div className="row">
                    <div style={{ background: 'red', height: '35rem' }} className="col-lg-6 col-md-6 col-sm-12 ">
                        <img className="position-absolute" style={{ width: '100%', height: "100%" }} src={phone} alt="phonejacket" />



                    </div>
                    <div style={{ height: '35rem' }} className="col-lg-3 col-md-6 col-sm-12">
                        <img className="position-absolute" style={{ width: '100%', height: "100%" }} src={shoe} alt="shoes" />


                    </div>
                    <div style={{ height: '35rem' }} className="col-lg-3 col-md-6 col-sm-12">
                        <img style={{ width: '100%', height: "40%" }} src={bag} alt="bag" />
                        <img style={{ width: '100%', height: "60%" }} src={necklaceOne} alt="necklace" />


                    </div>

                </div>

            </div>
            <PopularItems PopularProducts={PopularProducts}  show={true}>
                <h2>Popular Products</h2>
                <p>The documentation is divided into several sections
                with a different tone and purpose. If you plan to write more than a few sentences,
                             you might find it helpful to get familiar with the</p>
            </PopularItems>

            <HomeVideo />


        </>
    )
}

export default React.memo(FeaturedItems)
