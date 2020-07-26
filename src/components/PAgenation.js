import React from 'react'


export const PAgenation = ({postPerPage,totalPosts,paginate}) => {
    const pageNumbers =[]
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage);i++) {
        pageNumbers.push(i)
        
    }


    return (
        <nav className="pagination">
            <ul>
                {
                    pageNumbers.map(number =>(
                        <li key={number} className="page-item">

                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    )
}
