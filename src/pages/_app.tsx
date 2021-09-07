import '../styles/globals.css'
import "../styles/cubes.css"
import "../styles/circles.css"

import {useRouter} from "next/router";
import React from "react";

function MyApp({Component, pageProps}) {
    const router = useRouter()
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
