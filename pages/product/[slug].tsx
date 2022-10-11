import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { GetStaticProps, GetStaticPaths } from "next";
import { Product as ProductType } from "../../types";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";
import Product from "../../components/Product";
import { useStateContext } from "../../context/StateContext";

type Props = {
    product: ProductType;
    products: ProductType[];
};

const ProductDetails = ({ product, products }: Props) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState<number>(0);
    const { decreaseQuantity, increaseQuantity, qty, onAdd } =
        useStateContext();

    return (
        <div className="bg-gradient-to-r via-black from-[#1f001f] to-[#1f001f] text-white min-h-screen">
            <div className="flex flex-col sm:flex-row px-0 sm:px-10">
                <div className="p-10">
                    <div>
                        <img
                            src={urlFor(image && image[index])?.url()}
                            className="rounded-lg h-64 w-60 object-cover border-2 border-purple-900"
                        />
                    </div>
                    <div className="flex flex-row">
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item).url()}
                                className="h-12 w-12 object-cover rounded-lg m-1 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-purple-900 cursor-pointer border-2 border-purple-900"
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col p-10">
                    <h1 className="text-xl font-extrabold">{name}</h1>
                    <div className="flex flex-row items-center mb-5">
                        <div className="flex flex-row items-center">
                            <AiFillStar fill="purple" />
                            <AiFillStar fill="purple" />
                            <AiFillStar fill="purple" />
                            <AiFillStar fill="purple" />
                            <AiOutlineStar fill="purple" />
                        </div>
                        <p className="text-xs">(20)</p>
                    </div>
                    <h4 className="font-bold text-sm underline">Details: </h4>
                    <p className="text-sm max-w-[20rem] text-gray-400">
                        {details}
                    </p>
                    <p className="text-md font-bold py-2">${price}</p>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-sm">Quantity:</h3>
                        <p className="flex flex-row items-center justify-between border rounded-md select-none">
                            <div
                                onClick={decreaseQuantity}
                                className="px-2 border-r bg-[#460946] rounded-l-md opacity-70 hover:opacity-100 duration-500 cursor-pointer"
                            >
                                <AiOutlineMinus className="h-7" />
                            </div>
                            <span className="">{qty}</span>
                            <div
                                onClick={increaseQuantity}
                                className="px-2 border-l bg-[#460946] rounded-r-md opacity-70 hover:opacity-100 duration-500 cursor-pointer"
                            >
                                <AiOutlinePlus className="h-7" />
                            </div>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 select-none">
                        <button
                            onClick={() => onAdd(product, qty)}
                            className="border rounded-md bg-[#6e0e6e] opacity-70 hover:opacity-100 duration-500"
                        >
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            className="border rounded-md bg-[#6e0e6e] opacity-70 hover:opacity-100 duration-500"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="text-center py-1">You may also like</h2>
                <div className="">
                    <div className="flex flex-col sm:flex-row gap-3 mx-10 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-purple-900">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({
    params: { slug },
}: any) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product },
    };
};

export default ProductDetails;
