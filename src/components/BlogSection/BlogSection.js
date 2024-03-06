import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`blog-section section-padding ${props.bClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-s2">
                            <span>#Causes</span>
                            <h2>Popular  <span>causes</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids">
                            {blogs.slice(0, 3).map((blog, Bitem) => (
                                <div className="grid" key={Bitem}>
                                    <div className="entry-media">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="cat">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.thumb}</Link>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p className="date">{blog.create_at}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;