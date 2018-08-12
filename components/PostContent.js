import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem'

class PostContent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <h1> Reading, Learning , Sharing about technical</h1>
                <PostItem/>
                <PostItem/>
            </React.Fragment>
        );
    }
}

PostContent.propTypes = {}

export default PostContent;