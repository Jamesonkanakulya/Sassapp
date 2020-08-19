import React, { useContext, useState, useEffect } from 'react'
import { LabettieContext } from './Context'
import { PAgenation } from './PAgenation'
import { Link } from 'react-router-dom'
import {Button} from './StyledComponent'

function GalleryContent() {
    const products = useContext(LabettieContext)


    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)
    const [ListProducts, setListProducts] = useState([])
    const AltListProducts = products.products

    useEffect(() => {

        if (!products) {
            return <div>
                Loading.....
            </div>
        }
        else {
            // setPostPerPage(AltListProducts.length)
            return setListProducts(AltListProducts)

        }

    }, [products])



    const IndexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPOst = IndexOfLastPost - postPerPage
    const currentPosts = ListProducts.slice(indexOfFirstPOst, IndexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log(currentPosts);
    return (
        <>
        <div className="container">
        {
                currentPosts.map((item, i) => {
                    return <div key={i}  >

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                                <div className="galleryContentRight">
                                <img src={item.images[0]} alt={item.title} />
                                </div>
                                

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                              <div className="galleryContentLeft">
                              <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <h6 >$ <em style={{color:"red"}}>{item.price}</em> </h6>
                                <Button style={{marginTop:"3rem"}} ><Link to={`/gallery/${item.slug}`}>review item</Link> </Button>
                                  
                              </div>

                            </div>

                        </div>

                    </div>
                })
            }

            <div className="paginate">
            <PAgenation className="pagination" postPerPage={postPerPage} totalPosts={ListProducts.length}
                paginate={paginate}
            />
                
            </div>


            
        </div>


            

           
        </>
    )
}

export default GalleryContent
