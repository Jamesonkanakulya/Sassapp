import React from 'react'
import BlogContent from '../components/BlogContent'
import { Background } from '../components/StyledComponent';
import TitleTwo from '../components/TitleTwo';

function Blog() {
    return (
        <div>

            <Background opacity=".5" height="25rem" />
            <TitleTwo title="blog" />
            <BlogContent />
        </div>
    )
}

export default Blog
