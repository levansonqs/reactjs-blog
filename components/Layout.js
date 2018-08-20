import Head from 'next/head'
import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class Layout extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        const {title,children} =this.props
        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                </Head>
                {children}
            </React.Fragment>
        )
    }
}

export default Layout