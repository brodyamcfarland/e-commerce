import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>Next-Stripe-Sanity</title>
            </Head>
            <header className="sticky">
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
