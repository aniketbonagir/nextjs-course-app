import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

// component for global css style imports
export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}