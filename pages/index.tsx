import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-r via-black from-[#1f001f] to-[#1f001f] h-screen">
            <Head>
                <title>StripeJS</title>
                <meta
                    name="description"
                    content="E-Commerce-Next-Sanity-Stripe"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Home;
