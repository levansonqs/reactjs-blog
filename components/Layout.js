import Head from 'next/head'
import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


const Layout = (props) =>(
    <React.Fragment>
        <Head>
            <title>{props.title}</title>
        </Head>
        {props.children}
    </React.Fragment>
)

export default Layout