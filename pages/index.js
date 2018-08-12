/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Layout from "../components/Layout";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import WapperContent from '../components/WapperContent'
import HomeContent from '../components/HomeContent'

class Index extends React.Component {

    render() {
        return (
            <Layout title='Home | Laravel reactjs'>
                <WapperContent>
                    <HomeContent/>
                </WapperContent>
            </Layout>
        );
    }
}

Index.propTypes = {
    // classes: PropTypes.object.isRequired,
    // theme: PropTypes.object.isRequired,
};


export default Index;
