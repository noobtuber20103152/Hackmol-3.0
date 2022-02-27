
import React, { Component, useEffect } from 'react'
import CommentComponent from './CommentComponent';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            src: "",
            username: "",
            comment: "",
            src: "",
            post: ""
        }
    }
    async componentDidMount() {
        let url = "http://localhost:9000/api/comments"
        let data = await fetch(url, {
            method: "GET",
        })
        let parseData = await data.json();
        this.setState({ comments: parseData })
        let params = window.location.search;
        let urlParams = new URLSearchParams(params)
        let src = urlParams.get('src');
        this.setState({ src: src });
        let username = prompt("Enter your name");
        this.setState({ username: username })
        document.title = this.state.src;
    }

    render() {
        const post = async () => {
            console.log(this.state.username, this.state.comment, this.state.src)
            let url = "http://localhost:9000/api/comments";
            const details = {
                username: this.state.username,
                comment: document.getElementById("textarea").value,
                src: this.state.src
            }
            console.log(details)
            let data = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details)
            })
            document.getElementById("textarea").value = "";
        }
        return (
            <> 
                <div className="container-fluid video-blog my-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row no-margin video-cover col-md-12">
                                    <video height="300" src={`./video/${this.state.src}.mp4`} controls frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mb-4">
                        <div class="col-md-12">
                            <h4 class="border-bottom pb-2">Comments</h4>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Write a comment</label>
                                <textarea id="textarea" rows="3" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button id="submitBtn" onClick={post} class="btn btn-primary float-right my-2">Post comment</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="typing text-success"></div>
                            <ul id="afterpost" class="comment__box">
                                {this.state.comments.map((element) => {
                                    if (element.src === this.state.src) {
                                        return <CommentComponent date={element.updatedAt.slice(0, 10)} username={element.username} comment={element.comment} />
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
