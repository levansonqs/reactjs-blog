import React from 'react';
import PropTypes from 'prop-types';
import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
    render() {
        const {pageContext} = this.props;

        return (
            <html lang="en" dir="ltr">
            <Head>
                <title>My page</title>
                <meta charSet="utf-8"/>
                {/* Use minimum-scale=1 to enable GPU rasterization */}
                <meta
                    name="viewport"
                    content={
                        'user-scalable=0, initial-scale=1, ' +
                        'minimum-scale=1, width=device-width, height=device-height'
                    }
                />
                {/* PWA primary color */}
                <meta name="theme-color" content={pageContext.theme.palette.primary.main}/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500"
                />
                <link
                    rel="stylesheet"
                    href="/static/nprogress.css"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = ctx.renderPage(Component => {
        const WrappedComponent = props => {
            pageContext = props.pageContext;
            return <Component {...props} />;
        };

        WrappedComponent.propTypes = {
            pageContext: PropTypes.object.isRequired,
        };

        return WrappedComponent;
    });

    return {
        ...page,
        pageContext,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                <style
                    id="jss-server-side"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{__html: pageContext.sheetsRegistry.toString()}}
                />
                {flush() || null}
            </React.Fragment>
        ),
    };
};

export default MyDocument;
