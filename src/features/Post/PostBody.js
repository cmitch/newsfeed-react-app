import React, { Component } from 'react';

class PostBody extends Component {
    render() {
        return (
            <p>
                {this.props.value.body}
            </p>
        );
    }
}

export default PostBody;