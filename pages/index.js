/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Layout from "../components/Layout";
import WapperContent from '../components/WapperContent'
import HomeContent from '../components/HomeContent'

class Index extends React.Component {
static  getInitialProps (ctx) {
        console.log('client side')

    }
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

export default Index;
