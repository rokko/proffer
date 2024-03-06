import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'


const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Funding <span>(2)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Charity organization  <span>(7)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Helpless  <span>(51)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Charity <span>(5)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Children <span>(10)</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent post</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Charity</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Organization</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Donation</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Manfacturing</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Children</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Funds</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
