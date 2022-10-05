import FooterBanner from "../components/FooterBanner";
import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import { client } from "../lib/client";
import { Banner, Product as ProductType } from "../types";

type Props = {
    products: ProductType[];
    bannerData: Banner[];
};

const Home = ({ products, bannerData }: Props) => {
    return (
        <div className="bg-gradient-to-r via-black from-[#1f001f] to-[#1f001f] min-h-screen text-white">
            <HeroBanner bannerData={bannerData} />
            <div className="flex flex-col gap-1 items-center justify-center pt-3">
                <h2 className="text-2xl font-bold">Best Selling Products</h2>
                <p>fhgfjhfgh</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 content-center gap-5 items-center justify-center mt-10 px-10">
                {products?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
            <div className="pb-10">
                <FooterBanner bannerData={bannerData} />
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: {
            products,
            bannerData,
        },
    };
};

export default Home;
