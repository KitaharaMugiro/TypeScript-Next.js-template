import * as React from "react";
import NextApp, { AppContext, Container } from "next/app";

interface Props {
    pageProps: any;
}

class App extends NextApp<Props> {
    render() {
        const { pageProps, Component } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }

    static async getInitialProps({ Component, ctx }: AppContext) {
        const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve());

        const [session, pageProps] = await Promise.all([
            componentGetInitialProps(ctx),
        ]);

        return {
            session,
            pageProps
        };
    }
}

export default App;