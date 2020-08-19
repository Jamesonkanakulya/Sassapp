import React from 'react'
import GalleryContent from '../components/GalleryContent'
import Services from '../components/Services'
import { Background } from '../components/StyledComponent'
import TitleTwo from '../components/TitleTwo'

function Gallery() {
    return (
        <div>
            
            <Background opacity=".5" height="25rem" />
            <TitleTwo title="gallery" />


            <GalleryContent/>
            <Services/>
          
        </div>
    )
}

export default Gallery
