import React, { Component } from 'react';
import PostBody from './PostBody';
import PostProfileName from './PostProfileName';

class Post extends Component {
    render() {
        return (
            <li key={this.props.id}>
                <PostProfileName value={this.props.value} />
                <PostBody value={this.props.value} />
            </li>
        );
    }
}

export default Post;