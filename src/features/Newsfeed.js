import React, { Component } from 'react';
import Post from '../features/Post/Post';
import sample1 from '../sampleData/sample1.json';

class Newsfeed extends Component {

    constructor(props) {
        super(props)

        let postArray = []

        Object.keys(sample1).forEach( key => {
            postArray.push(sample1[key])
        })

        this.state = {
            postArray: postArray
        }
    }

    renderPosts() {
        const posts = [];

        this.state.postArray.forEach((item, index) => {
            posts.push( 
                <Post value={item}/>
            )
        })
        return posts
    }

    getPosts() {
        const posts = [];

        this.state.postArray.forEach((item, index) => {
            posts.push( 
                <li key={item.id}>
                    <h1>{item.username} {index}</h1>
                    <p>{item.body}</p>
                </li>
            )
        })
        return posts
    }

    render() {
        return (
            <React.Fragment>
                <h1>Get Posts</h1>
                <ul>
                    {this.getPosts()}
                </ul>
                <h1>Component Posts</h1>
                <ul>
                    {this.renderPosts()}
                </ul>
            </React.Fragment>
        );
    }
}

export default Newsfeed;