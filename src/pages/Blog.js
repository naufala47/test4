import React, { Component } from 'react';
import axios from 'axios'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            isLoading: true,
            errors: null
        };
    }

    getAPI = () => {
        axios.get(`https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`, { headers: { 'app-id': '601d01d436ec40adb3b5faf3' } }, { delayed: true })
            .then(response =>
                response.data.data.map(
                    itsdata => ({
                        image: `${itsdata.image}`,
                        text: `${itsdata.text}`
                    })
                )
            )

            .then(datas => {
                this.setState(
                    {
                        datas,
                        isLoading: false
                    },
                    console.log(datas)
                );
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getAPI();
        console.log(this.getAPI());

    }

    render() {
        const { isLoading, datas } = this.state;
        return (
            <div className="section-vcardbody" id="page-blog">
                <div className="section-blog">
                    <h2 className="section-title">Blog</h2>
                </div>

                <div className="blog-posts">
                    {this.state.datas.map((blog) => {
                        return <div className="blog-item">
                            <div className="blog-item-wrapper">
                                <div className="blog-item-thumb">
                                    <img src={blog.image} />
                                    {blog.text}
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="section-pagination">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="pagination-numbers">
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

            </div>

        )
    }
}
