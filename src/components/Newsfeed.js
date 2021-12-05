import React, { Component } from 'react';
import Post from './Post/Post';
import sample1 from '../sampleData/sample1.json';

class Newsfeed extends Component {

    constructor(state) {
        super(state)

        this.postArray = []

        Object.keys(sample1).forEach( key => {
            this.postArray.push(sample1[key])
        })

        this.state = {
            postArray: this.postArray
        }
    }

    getPosts() {
        const posts = [];

        this.state.postArray.forEach((item, index) => {
            posts.push( 
                <div>
                    <h1>{item.username} {index}</h1>
                    <p>{item.body}</p>
                </div>
            )
        })
        return posts
    }

    render() {
        return (
            <div>
                <Post />
                {this.getPosts()}
            </div>
        );
    }
}

export default Newsfeed;