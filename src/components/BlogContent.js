import React, { useState, useContext, useEffect } from 'react'
import { LabettieContext } from './Context'
import moment from 'moment'
import { BsFillChatFill, BsPersonFill } from "react-icons/bs";
import { PAgenation } from './PAgenation';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


function BlogContent() {

    const products = useContext(LabettieContext)
    const [category, setCategory] = useState("all")
    const [ListProducts, setListProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)
    const [comments, setComments] = useState(20)
    const [subscribe,setSubscribe]= useState('')



    const AltListProducts = products.products
    let type = getUnique(products.products, 'category')
    type = ["mordern technology", "travel news",
        "production", "Insparation", "Restaurants foods", "health care", ...type]

    useEffect(() => {
        if (products) {
            // setPostPerPage(AltListProducts.length)
            return setListProducts(AltListProducts)

        }

       
    }, [products,])

    useEffect(() =>{

        Aos.init({duration:2000})

    },[])
    const handleCategoy = e => {
        let name = e.target.name
        let category = e.target.type
        let value = e.target.value

        setCategory(value
            , filterProducts(value))
    }
    const filterProducts = (value) => {
        let tempProducts = AltListProducts
        if (value !== "all") {
            tempProducts = tempProducts.filter(item => item.category === value)
        }
        setListProducts(tempProducts)
    }
    const IndexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPOst = IndexOfLastPost - postPerPage
    const currentPosts = ListProducts.slice(indexOfFirstPOst, IndexOfLastPost)
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSubscribe = e =>{
        e.preventDefault()
        setSubscribe(e.target.value)
    }
 

    return (
        <div className="blogContent"  >
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-md-12 col-sm-12 ">
                        {
                            currentPosts.map(item => {
                                return <section data-aos="fade-up" className="right" key={item.id}>
                                    <img src={item.images[0]} alt={item.title} />
                                    <div className="dateFormat">
                                        <span className="date">{moment(item.datePosted).format("Do")}</span>
                                        <span className="month">{moment(item.datePosted).format("MMM YYYY")}</span>

                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description} </p>
                                    <div className="commentSection">

                                        <span  >   <BsPersonFill /> Betty's Blog post  </span>  |
                        <span><BsFillChatFill />{comments} Comments </span>

                                    </div>

                                </section>
                            })
                        }

                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">

                        <div  className="left">
                            <form id="search" className="form-inline my-2 my-lg-0" >

                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>



                            </form>

                            <div data-aos="fade-up"  className="category">

                                <h3>Category</h3>

                                {
                                    !type ? null : type.map((item, i) => {
                                        return <ul value={item} key={i}>
                                            <div className="dropdown-divider mb-4"></div>
                                            <li><Link to="#">{item}</Link> ({item.length})


                                            </li>



                                        </ul>
                                    })
                                }




                            </div>

                            <div data-aos="fade-up" className="recentPosts">
                                <h3>Recent post</h3>
                                <div className="dropdown-divider mb-4"></div>
                                {
                                    currentPosts.map(item => {
                                        return <section  key={item.id}>
                                            <img src={item.images[0]} alt={item.title} />
                                            <h4>{item.title}</h4>
                                            <p>{moment(item.datePosted).startOf('day').fromNow()}</p>

                                        </section>
                                    })

                                }


                            </div>
                            <div data-aos="fade-up" className="instagramPosts">
                                <h3>Instagram feeds</h3>
                                <div className="dropdown-divider mb-4"></div>
                                {
                                    currentPosts.map(item => {
                                        return <img  key={item.id} src={item.images[0]} alt={item.title} />
                                                    
                                    })

                                }


                            </div>

                            <div data-aos="fade-up" className="newSettler">
                            <h3>new settler</h3>
                                <div className="dropdown-divider mb-4"></div>

                                <form>
                                    <input type ="text"  placeholder="Enter email" onChange={handleSubscribe} value={subscribe} />
                                    <button type="submit" >Subscribe</button>
                                
                                </form>
                                
                            </div>







                        </div>



                    </div>


                </div>

            </div>

            <div className="paginate">
                <PAgenation className="pagination" postPerPage={postPerPage} totalPosts={ListProducts.length}
                    paginate={paginate}
                />

            </div>

        </div>
    )
}

export default BlogContent
