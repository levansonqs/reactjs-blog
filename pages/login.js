/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Layout from "../components/Layout";
import WapperContent from '../components/WapperContent'
import LoginPage from '../components/LoginPage'
import Router from 'next/router'

class Login extends React.Component {

    static async getInitialProps (ctx) {
        console.log('client side')
        if (ctx && ctx.req) {
            console.log('server side')
            ctx.res.writeHead(301, {Location: `http://test.com`})
            ctx.res.end()
        } else {
            console.log('client side')
            Router.push(`http://test.com`)
        }
    }
    render() {
        return (<div></div>
        );
    }
}

export default Login;
