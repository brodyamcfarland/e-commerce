import React from "react";
import { Product } from "../types";
import Link from "next/link";
import { urlFor } from "../lib/client";

type Props = {
    product: Product;
};

const Product = ({ product: { image, name, slug, price } }: Props) => {
    return (
        <div className="max-w-[250px] max-h-[400px] mx-auto rounded-lg border border-gray-700 opacity-80 hover:opacity-100 cursor-pointer duration-500 hover:border-purple-600">
            <Link href={`/product/${slug}`}>
                <div className="flex flex-col rounded-lg shadow-md">
                    <img
                        src={urlFor(image && image[0]).url()}
                        width={250}
                        height={250}
                        className="rounded-tr-lg rounded-tl-lg object-cover h-[250px] w-[250px]"
                    />
                    <div className="px-2 py-2 h-20 bg-gradient-to-r from-[#551155] to-gray-800 rounded-br-lg rounded-bl-lg ">
                        <p className="">{name}</p>
                        <p className="">${price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
