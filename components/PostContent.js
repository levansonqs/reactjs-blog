import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem'
import {api_url} from '../constants/config'
import axios from 'axios';
class PostContent extends Component {
    constructor(props) {
        super(props)
        this.state = {posts:[]}
    }

    componentDidMount(){
        axios.get(api_url+'posts').then((response)=>
            this.setState({posts:response.data.data})
        )
    }

    render() {
        const {posts}=this.state
        return (
            <React.Fragment>
                <h1> Reading, Learning , Sharing about technical</h1>
                {posts.map((value,key)=>
                    <PostItem
                        key={key}
                        data={value}
                    />
                )}

            </React.Fragment>
        );
    }
}

PostContent.propTypes = {}

export default PostContent;