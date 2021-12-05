import React, { Component } from 'react';
import PostBody from './PostBody';
import PostProfilePicture from './PostProfilePicture';
import Comment from '../Comment';
import PostProfileName from './PostProfileName';

class Post extends Component {
    render() {
        return (
            <div>
                <div>
                    <PostProfilePicture />
                    <PostProfileName />
                    <PostBody />
                </div>
                <div>
                    <Comment />
                </div>
            </div>
        );
    }
}

export default Post;