import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Blog = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getApi()
    }, [])

    const getApi = () => {
        axios.get('http://www.omdbapi.com/?s=avenger&apikey=e01f82b8')
            .then(function (response) {
                // handle success
                setUsers(response.data.Search)
                console.log(response.data.Search);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    return (
        <div>
            {
                users.map(post => {
                    return (
                        // < !--SECTION: BLOG-->
                        <div className="section-vcardbody section-page" id="page-blog">
                            <div className="section-blog">

                                {/* <!-- Section title --> */}
                                <h2 className="section-title">Blog</h2>
                                {/* <!-- /Section title -->     */}

                                {/* <!-- BLOG POSTS --> */}
                                <div className="blog-posts">
                                    {/* <!-- blog-item --> */}
                                    <div className="blog-item">
                                        <div className="blog-item-wrapper">
                                            {/* <!-- blog item thumbnail --> */}
                                            <div class="blog-item-thumb">
                                                <a href="single.html" class="loadPost"><img src={post.Poster} alt="" /></a>
                                            </div>
                                            {/* <!-- /blog item thumbnail --> */}
                                            {/* <!-- Blog item - infos --> */}
                                            <div class="blog-item-infos">
                                                {/* <!-- blog-item-title --> */}
                                                <div class="blog-item-title-wrapper">
                                                    <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">{post.Title}</a></h2>
                                                </div>
                                                {/* <!-- /blog-item-title --> */}
                                                {/* <!-- blog item - description --> */}
                                                <div class="blog-item-description">
                                                    <p><a href="single.html" class="loadPost">{post.Year}</a></p>
                                                </div>
                                                {/* <!-- /blog-item-description --> */}
                                                {/* <!-- blog item - link --> */}
                                                <div class="blog-item-link">
                                                    <a href="single.html" class="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* <!-- /blog item - link --> */}
                                            </div>
                                            {/* <!-- /blog item - infos --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /blog-item --> */}

                                    {/* <!-- Pagination --> */}
                                    <div class="section-pagination">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <span class="pagination-numbers">
                                                    <a href="#">1</a>
                                                    <a href="#">2</a>
                                                    <a href="#">3</a>
                                                    <a href="#">4</a>
                                                    <a href="#">5</a>
                                                    <a href="#">6</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Pagination --> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog
