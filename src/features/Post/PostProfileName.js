import React, { Component } from 'react';

class PostProfileName extends Component {
    render() {
        return (
            <h1>{this.props.value.username}</h1>
        );
    }
}

export default PostProfileName;