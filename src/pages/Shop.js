import React, { useContext, useState, useEffect } from 'react'

import { LabettieContext } from '../components/Context';
import { PAgenation } from '../components/PAgenation';
import PopularItems from '../components/PopularItems';
import Services from '../components/Services';
import {Background} from '../components/StyledComponent';
import TitleTwo from '../components/TitleTwo';


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function Shop() {


    const products = useContext(LabettieContext)
    const [category, setCategory] = useState("all")
    const [ListProducts, setListProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)




    const AltListProducts = products.products
    let type = getUnique(products.products, 'category')
    type = ["all", ...type]

    useEffect(() => {
        if (products) {
            // setPostPerPage(AltListProducts.length)
            return setListProducts(AltListProducts)

        }

    }, [products])


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




    return (
        <div className="shop">
            <Background opacity=".5" height="25rem"/>
            <TitleTwo title="shop"/>

         


            <div>
                <form className="form-group pt-4 ml-5 w-25">
                    <label style={{ fontSize: "1rem", textTransform: "capitalize" }}
                        htmlFor="category"><strong>sort by category :</strong></label>
                    <select name="category" id="category" value={category} className="form-control"
                        onChange={handleCategoy}
                    >
                        {
                            !type ? null : type.map((item, i) => {
                                return <option value={item} key={i}>
                                    {item}
                                </option>

                            })
                        }
                    </select>

                </form>
            </div>


            <div className="container mb-4 ">

                <div className="pageList">
                    <PopularItems PopularProducts={currentPosts} show={false} />

                    <PAgenation className="pagination" postPerPage={postPerPage} totalPosts={ListProducts.length}
                        paginate={paginate}
                    />

                </div>


            </div>
            <Services />


        </div>
    )
}

export default Shop
